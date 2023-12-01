const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    credit: {
        type: Number,
        require: true,
        default: 0
    },
    type: {
        type: Number,
        require: true,
        default: 0
    }
})

userSchema.pre('save', async function (next) {
    const user = this
    console.log(user.password)

    if (!user.isModified('password')) {
        return next();
    }
    user.password = await bcrypt.hash(user.password, 8);
    console.log(user.password)
    try {
        
    } catch (error) {
        
    }
    next()
})

mongoose.model("User", userSchema);