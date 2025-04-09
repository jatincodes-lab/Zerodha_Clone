const { Schema } = require("mongoose");
const ordersSchema = new Schema({
    name: {
        type: String,
    },
    qty: {
        type: Number,
    },
    price: {
        type: Number,
    },
    mode: {
        type: String,
    }
});

module.exports = ordersSchema;