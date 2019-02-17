const express = require('express')
const router = express.Router()
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

module.exports = router