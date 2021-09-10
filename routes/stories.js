const router = require('express').Router()
require('../database')
const Story = require('../models/Story')


router.get('/',(req,res)=>{
    res.json({
        msg:"stories"
    })
})




module.exports = router