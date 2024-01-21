const Users = require("../models/userModel");
const Foods = require("../models/foodModel");
const Restaurants = require("../models/restaurantModel");
const Orders = require("../models/orderModel")
const router = require("express").Router()
const bcrypt = require("bcrypt");

const userControllers = {
    createOrder: async(req, res) => {
        try {
            const newOrder = new Orders(req.body);
            const savedOrder = await newOrder.save();
            if (req.body.user) {
              const user = Users.findById(req.body.user);
              await user.updateOne({ $push: { orders: savedOrder._id } });
            }
            if (req.body.shopOwner) {
              const shopOwner = Users.findById(req.body.shopOwner);
              await shopOwner.updateOne({ $push: { orders: savedOrder._id } });
            }
            res.status(200).json(savedOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    getUser: async(req, res) => {
        try {
            const user = await Users.findById(req.params.id);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    getAllOrdersInRes: async(req, res) => {
        try {
        const shopOwnerId = req.params.shopOwnerId;
        const orders = await Orders.find({ shopOwner: shopOwnerId }).populate('user', 'shopOwner');
        res.status(200).json(orders);
        } catch (err) {
        res.status(500).json(err);
        }
    }, 
    getAllOrdersOfUser: async(req, res) => {
        try {
            const userId = req.params.userId;
            const orders = await Orders.find({ user: userId }).populate('user', 'shopOwner');
        res.status(200).json(orders);
        } catch (err) {
        res.status(500).json(err);
        }
    }, 
    getAllUsers: async(req, res) => {
      try {
        const users = await Users.find();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    }, 
    deleteOrder: async(req, res) => {
        try {
            await Users.updateMany(
                { onGoingBooking: req.params.id },
                { $pull: { foods: req.params.id } }
            )
            await Orders.findByIdAndDelete(req.params.id);
            res.json({ msg: "Order deleted" });
          } catch (err) {
            return res.status(500).json({ msg: err.message });
          }
    }, 
    updatePassword: async(req, res) => {
        try {
            const { email, oldPassword, newPassword } = req.body;
            console.log(newPassword)
            const user = await Users.findOne({ email: email })
            if (user) {
                const passwordMatch = await bcrypt.compare(oldPassword, user.password);
  
                if (!passwordMatch) {
                    return res.status(401).json({ message: "Invalid password" });
                } else {
                    const salt = await bcrypt.genSalt();
                    const hashedPassword = await bcrypt.hash(newPassword, salt);
                    user.findByIdAndUpdate({ _id: user._id },
                        {
                          password: hashedPassword
                        })
                    return res.status(200).json({message: "Updated password"})
                }
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }, 
}

module.exports = userControllers