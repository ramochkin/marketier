const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    password: {
        //TODO
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        match: /.+\@.+\..+/,
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        unique: true
    },
    watchlist: [{

    }],
    portfolio: [{

    }],
});

const User = model('user', userSchema)

module.exports = User