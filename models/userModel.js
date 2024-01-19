import mongoose from "mongoose";

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
  }
});


const User = mongoose.model("User", userSchema);

export default User;
