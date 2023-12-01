const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL).then(
    () => {
        console.log("connect to database")
    }
)

.catch((error) => {
    console.log(`Cannot connect to databse ` + error);
})