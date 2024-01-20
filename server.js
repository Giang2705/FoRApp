require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true,
}));

// Routes
app.use("/api", require("./routes/uploadImageRoutes"))
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/foods", require("./routes/foodRoutes"))
app.use("/api/restaurants", require("./routes/restaurantRoutes"))
app.use("/api/orders", require("./routes/orderRoutes"))


// Connect to mongodb
const connectDatabase = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Connected to mongodb");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
};
connectDatabase();

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()  => {
    console.log("Server is running on port", PORT);
})