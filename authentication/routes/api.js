const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb://admin:Pixel8r0!@ds145704.mlab.com:45704/vocable_db"

mongoose.connect(db, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected to MongoDB')
    }
})

router.get('/', (req, res) => {
    res.send('From API Route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, newUser) => {
        if (err) {
            console.log(err)
        } else {
            let payload = { subject: newUser._id }
            let token = jwt.sign(payload, 'key')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (err, user) => {
        if (err) {
            console.log(err)
        } else {
            if (!user) {
                res.status(401).send('Invalid Email')
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Incorrect Password')
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'key')
                    res.status(200).send({token})
                }
            }
        }
    })
})

module.exports = router