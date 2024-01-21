const Users = require("../models/userModel");
const Foods = require("../models/foodModel");
const Restaurants = require("../models/restaurantModel");
const Orders = require("../models/orderModel")
const router = require("express").Router()

const orderControllers = {
    createOrder: async(req, res) => {
        try {
            const newOrder = new Orders(req.body);
            const savedOrder = await newOrder.save();
            if (req.body.user) {
              const user = Users.findById(req.body.user);
              await user.updateOne({ $push: { orders: savedOrder._id } });
            }
            if (req.body.restaurant) {
              const restaurant = Restaurants.findById(req.body.restaurant);
              await restaurant.updateOne({ $push: { orders: savedOrder._id } });
            }
            res.status(200).json(savedOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    getAnOrder: async(req, res) => {
        try {
            const order = await Orders.findById(req.params.id).populate('user', 'restaurant');
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    getAllOrdersInRes: async(req, res) => {
        try {
        const restaurantId = req.params.restaurantId;
        const orders = await Orders.find({ restaurant: restaurantId }).populate('user', 'restaurant');
        res.status(200).json(orders);
        } catch (err) {
        res.status(500).json(err);
        }
    }, 
    getAllOrdersOfUser: async(req, res) => {
        try {
            const userId = req.params.userId;
            const orders = await Orders.find({ user: userId }).populate('user', 'restaurant');
        res.status(200).json(orders);
        } catch (err) {
        res.status(500).json(err);
        }
    }, 
    getAllOrders: async(req, res) => {
      try {
        const orders = await Orders.find();
        res.status(200).json(orders);
      } catch (err) {
        res.status(500).json(err);
      }
    }, 
    deleteOrder: async(req, res) => {
        try {
            await Users.updateMany(
                { orders: req.params.id },
                { $pull: { orders: req.params.id } }
            )
            await Restaurants.updateMany(
              { orders: req.params.id },
              { $pull: { orders: req.params.id } }
            )
            await Orders.findByIdAndDelete(req.params.id);
            res.json({ msg: "Order deleted" });
          } catch (err) {
            return res.status(500).json({ msg: err.message });
          }
    }, 
    updateOrder: async(req, res) => {
        try {
            const { status } =
              req.body;
            await Orders.findByIdAndUpdate(
              { _id: req.params.id },
              {
                status
              }
            );
      
            res.json({ msg: "Updated order status" });
          } catch (err) {
            return res.status(500).json({ msg: err.message });
          }
    }, 
}

module.exports = orderControllers