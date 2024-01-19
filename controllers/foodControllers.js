const Foods = require("../models/foodModel");
const Restaurants = require("../models/restaurantModel");
const router = require("express").Router()

const foodControllers = {
    createFood: async(req, res) => {
        try {
            const { name, price, description, restaurant } =
              req.body;
            // if (!images) return res.status(400).json({ msg: "No image upload" });

            const newFood = new Foods({
                name: name.toLowerCase(),
                price,
                description,
                restaurant,
              });

            const food = await Foods.findOne({name});
            if (food)
              return res.status(400).json({ msg: "This food already exists" });

            if (req.body.restaurant) {
                const restaurant = Restaurants.findById(req.body.restaurant);
                await restaurant.updateOne({ $push: { foods: newFood._id } });
            }
      
            await newFood.save();
      
            res.json({ msg: "Food created" });
          } catch (err) {
            return res.status(500).json({ msg: err.message });
          }
    }, 
    getAllFood: async(req, res) => {
        try {
        const restaurantId = req.params.restaurantId;
        const foods = await Foods.find({ restaurant: restaurantId }).populate('restaurant');
        res.status(200).json(foods);
        } catch (err) {
        res.status(500).json(err);
        }
    }, 
    deleteFood: async(req, res) => {
        try {
            await Restaurants.updateMany(
                { foods: req.params.id },
                { $pull: { foods: req.params.id } }
            )
            await Foods.findByIdAndDelete(req.params.id);
            res.json({ msg: "Food deleted" });
          } catch (err) {
            return res.status(500).json({ msg: err.message });
          }
    }, 
    updateFood: async(req, res) => {
        try {
            const { name, price, description } =
              req.body;
            // if (!images) return res.status(400).json({ msg: "No image upload" });
      
            await Foods.findByIdAndUpdate(
              { _id: req.params.id },
              {
                name,
                price,
                description,
                // images,
              }
            );
      
            res.json({ msg: "Updated food" });
          } catch (err) {
            return res.status(500).json({ msg: err.message });
          }
    }, 
}

module.exports = foodControllers