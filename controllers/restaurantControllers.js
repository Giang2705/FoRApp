const Foods = require("../models/foodModel");
const Users = require("../models/userModel");
const Restaurants = require("../models/restaurantModel");
const axios = require("axios");

const restaurantControllers = {
    createRestaurant: async(req, res) => {
        try {
            const { name, description, shopOwnerEmail, shopOwnerName, shopOwnerPassword, shopOwnerPhoneNumber } =
              req.body;

              const url = "http://localhost:3000/api/auth/register/shopOwner"
              const inputData = {
                email: shopOwnerEmail,
                name: shopOwnerName,
                password: shopOwnerPassword,
                phoneNumber: shopOwnerPhoneNumber
              }

              await axios.post(url, inputData).then(async (response) => {
                console.log(response.data)
                  const newRestaurant = new Restaurants({
                    name: name.toLowerCase(),
                    description,
                    shopOwner: response.data.newUser._id,
                  });    
                const restaurant = await Restaurants.findOne({name});

                if (restaurant)
                  return res.status(400).json({ msg: "This restaurant already exists" });
    
                await newRestaurant.save();
                await Users.findByIdAndUpdate(response.data.newUser._id, {$push : {restaurant: newRestaurant}})
                
                res.json({ msg: "Restaurant created" });
              })
              .catch((err) =>{
                console.log(err);
              })
          } catch (err) {
            return res.status(500).json({ msg: err.message });
          }
    }, 
    getARestaurant: async(req, res) => {
        try {
          const restaurant = await Restaurants.findById(req.params.id).populate("shopOwner");
          res.status(200).json(restaurant);
        } catch (err) {
          res.status(500).json(err);
        }
    }, 
    getListRestaurant: async(req, res) => {
      try {
        const restaurants = await Restaurants.find();
        res.status(200).json(restaurants);
      } catch (err) {
        res.status(500).json(err);
      }
  }, 
    deleteRestaurant: async(req, res) => {
        try {
            await Foods.deleteMany({restaurant: req.params.id});
            await Restaurants.findByIdAndDelete(req.params.id);
            res.json({ msg: "Restaurant deleted" });
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
    }, 
    updateRestaurant: async(req, res) => {
        try {
            const { name, description } =
              req.body;
            // if (!images) return res.status(400).json({ msg: "No image upload" });
      
            await Restaurants.findByIdAndUpdate(
              { _id: req.params.id },
              {
                name,
                description,
                // images,
              }
            );
      
            res.json({ msg: "Updated restaurant" });
          } catch (err) {
            return res.status(500).json({ msg: err.message });
          }
    }, 
}

module.exports = restaurantControllers