const { Schema } = require('mongoose');

const watchlistSchema = new Schema({
    symbol: {
        type: String,
        required: true
    }
});

module.exports = watchlistSchema