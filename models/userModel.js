const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
    enum: ["customer", "staff", "shopOwner", "admin"],
  },
  credit: {
    type: Number,
    require: true,
    default: 0,
  },
  cart: {
    type: Array,
    default: [],
  },
  onGoingOrder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  }
});


module.exports = mongoose.model("User", userSchema)
