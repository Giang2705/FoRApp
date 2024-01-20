const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    shopOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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