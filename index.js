const express=require('express');
const fs=require("fs")
const app = express();
const bodyParser = require('body-parser');
const loginRoute=require('./routs/login')
const messageRoute = require('./routs/message')

app.use(bodyParser.urlencoded({ extended:false}))

app.use(loginRoute)
app.use(messageRoute)
app.use((req,res,next)=>{
    res.status(404).send(`<h1>Page not found</h1>`)
})
app.listen(7000)