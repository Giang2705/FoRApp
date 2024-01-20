const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
    },
    cart: {
        type: Array,
        default: [],
    },
    total: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        default: "Appending...",
    },
    time: {
        type: String,
        default: "00:00"
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Order", orderSchema)