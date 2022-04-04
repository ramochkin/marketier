const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const portfolioSchema = require('./portfolio');
const watchlistSchema = require('./watchlist');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        // unique: true
    },
    watchlist: [watchlistSchema],

    portfolio: [portfolioSchema],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const User = model('user', userSchema)

module.exports = User