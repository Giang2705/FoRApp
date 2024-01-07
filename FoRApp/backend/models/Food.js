const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: [{
        public_id:{
            type: String,
            required: true,
        },
        url:{
            type: String,
            required: true
        }
    }],
    price: {
        type: Number,
        trim: true,
        required: true,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("Foods", foodSchema)