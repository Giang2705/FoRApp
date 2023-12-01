const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();

router.post('/signup', (req, res) => {
    const {name, email, password, phoneNumber} = req.body;
    if (!name || !email || !password || !phoneNumber) {
        return res.status(402).send({error: "Please fill all the fields"})
    }
    User.findOne({email: email}).then(
        async (savedUser) => {
            if (savedUser) {
                return res.status(402).send({error: "Invalid"})
            }
            const user = new User({
                name,
                email,
                password,
                phoneNumber,
            })

            try {
                await user.save();
                const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
                res.send({token})
            } catch (error) {
                return res.status(422).send({error: error.message})
            }
        }
    )
})

router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(422).send({error: "Please fill all the fields"})
    }
    const savedUser = await User.findOne({email: email})
    if(!savedUser){
        return res.status(422).send({error: "Account does not exist."})
    }
    try {
        bcrypt.compare(password, savedUser.password, (error, result) => {
            if (!result) {
                return res.status(422).send({error: "Wrong password."})
            }
            const token = jwt.sign({_id: savedUser._id}, process.env.JWT_SECRET)
            res.send(token)
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;