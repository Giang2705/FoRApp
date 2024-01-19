const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    shopOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    staffs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    foods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
    }],
    description: {
        type: String,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("Restaurant", restaurantSchema)