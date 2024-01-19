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
    },
    status: {
        type: String,
        default: "Appending...",
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("Order", orderSchema)