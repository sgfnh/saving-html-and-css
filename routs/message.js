const express = require('express');
const data = require('./data');
const fs = require("fs")
const router = express.Router();
const path=require('path')
router.get(`/`, (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','mess.html'))
    })

router.post(`/`, (req, res, next) => {
    res.send(`${req.body.username}:${req.body.message}`);
})

module.exports = router