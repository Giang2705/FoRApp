const Foods = require("../models/foodModel");
const Restaurants = require("../models/restaurantModel");

const restaurantControllers = {
    createRestaurant: async(req, res) => {
        try {
            const { name, description, shopOwner } =
              req.body;
            // if (!images) return res.status(400).json({ msg: "No image upload" });
      
            const newRestaurant = new Restaurants({
                name: name.toLowerCase(),
                description,
                shopOwner,
              });

            const restaurant = await Restaurants.findOne({name});
            if (restaurant)
              return res.status(400).json({ msg: "This restaurant already exists" });

      
            await newRestaurant.save();
      
            res.json({ msg: "Restaurant created" });
          } catch (err) {
            return res.status(500).json({ msg: err.message });
          }
    }, 
    getAllFood: async(req, res) => {
        try {
            const foods = await req.body;
      
            res.json({
              status: "success",
              result: foods.length,
              foods: foods,
            });
          } catch (err) {
            return res.status(500).json({ msg: err.message });
          }
    }, 
    deleteFood: async(req, res) => {
        try {
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

module.exports = restaurantControllers