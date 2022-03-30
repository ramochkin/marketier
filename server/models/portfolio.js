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
        type :  Schema.Types.Decimal128,
    }
});

module.exports = portfolioSchema