const { Schema } = require('mongoose');

const portfolioSchema = new Schema({
    symbol: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    },
    purchasePrice: {
        type :  Number,
        min: 0.01
    }
});

module.exports = portfolioSchema