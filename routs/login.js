const express=require('express')
const path=require('path')
const router=express.Router()

router.get(`/login`,(req, res,next) => {
    res.sendFile(path.join(__dirname,'../','views','log.html'))
})
router.post(`/login`,(req, res, next) => {
    res.redirect(`/`)
})

module.exports=router
