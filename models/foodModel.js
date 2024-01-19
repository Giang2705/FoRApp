const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        required: true,
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
    }
    // images: [{
    //     public_id:{
    //         type: String,
    //         required: true,
    //     },
    //     url:{
    //         type: String,
    //         required: true
    //     }
    // }],
}, {
    timestamps: true,
})

module.exports = mongoose.model("Food", foodSchema)