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
app.use("/user", require("./routes/userRoutes"));
app.use("/api", require("./routes/uploadRoutes"))
app.use("/api", require("./routes/foodRoutes"))
app.use("/api", require("./routes/paymentRoutes"))

// Connect to mongodb
mongoose.connect(process.env.MONGO_URL).then(
    () => {
        console.log("connect to database")
    }
)
.catch((error) => {
    console.log(`Cannot connect to databse ` + error);
})

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//     })
// }

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()  => {
    console.log("Server is running on port", PORT);
})