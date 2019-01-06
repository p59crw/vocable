const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = "mongodb://admin:Pixel8r0!@ds145704.mlab.com:45704/vocable_db";

mongoose.connect(db, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MongoDB');
    }
});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Unauthorized Request');
    }
    let payload = jwt.verify(token, 'key');
    if (!payload) {
        return res.status(401).send('Unauthorized Request');
    }
    req.userId = payload.subject;
    next();
};

router.get('/', (req, res) => {
    res.send('From API Route');
});

router.get('/profile', verifyToken, (req, res) => {
    let profile = { "name": "Test" };
    res.json(profile);
});

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((err, newUser) => {
        if (err) {
            console.log(err);
        } else {
            let payload = { subject: newUser._id };
            let token = jwt.sign(payload, 'key');
            res.status(200).send({token});
        }
    });
});

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user) {
                res.status(401).send('Invalid Email');
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Incorrect Password');
                } else {
                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, 'key');
                    res.status(200).send({token});
                }
            }
        }
    });
});

module.exports = router;