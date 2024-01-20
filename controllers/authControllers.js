const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const functions = require("../utils/functions.js");
const handleServerError = functions.handleServerError;
const setJwtCookie = functions.setJwtCookie;

const authControllers = {
// Function to register a user
registerCustomer: async (req, res) => {
    // Set userType to 'customer'
    req.body.userType = "customer";
    await authControllers.register(req, res);
},
  
  // Function to register a shopOwner
registerShopOwner: async (req, res) => {
    // Set userType to 'shopOwner'
    req.body.userType = "shopOwner";
    await authControllers.register(req, res);
},
  
  // Function to register a staff
registerStaff: async (req, res) => {
      // Set userType to 'staff'
      req.body.userType = "staff";
      await register(req, res);
},
  
register: async (req, res) => {
    try {
      const { email, name, password, phoneNumber, userType } = req.body;
  
      if (!email || !name || !password || !phoneNumber || !userType) {
        return res.status(400).json({ message: "Incomplete data." });
      }
  
      const userExists = await User.findOne({ email });
  
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const salt = await bcrypt.genSalt();
  
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        phoneNumber,
        userType, // Add this line
      });
  
      const token = jwt.sign({_id: newUser._id}, process.env.JWT_SECRET)
  
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      });
    } catch (error) {
      handleServerError(res, error);
    }
  },
  
login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "Incomplete data." });
      }
  
      const user = await User.findOne({ email });
  
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (!passwordMatch) {
          return res.status(401).json({ message: "Invalid email or password" });
        }
  
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
  
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          userType: user.userType,
          password: user.password,
          credit: user.credit,
          cart: user.cart,
          orders: user.orders,
        });
      } else {
        return res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      handleServerError(res, error);
    }
  },
  
logout: async (req, res) => {
    try {
      res.cookie("jwt-cookie", "", {
        httpOnly: true,
        expires: new Date(0),
      });
  
      res.status(200).json({ message: "User logged out." });
    } catch (error) {
      handleServerError(res, error);
    }
  },

  comparePassword: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "Incomplete data." });
      }

      const user = await User.findOne({ email });

      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          return res.status(401).json({ message: "Invalid password" });
        }
      }
    } catch (error) {
      handleServerError(res, error);
    }
  }
}

module.exports = authControllers;
