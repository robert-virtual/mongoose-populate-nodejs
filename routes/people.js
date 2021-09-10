const router = require('express').Router()
require('../database')
const Person = require('../models/Person')


router.get('/',async (req,res)=>{

    try {

        const people = await Person.find()
        res.json({
            people
        })

    } catch (error) {
        res.status(500).json({
            error
        })
        
    }
})

router.post('/', async (req,res)=>{

    const {body} = req

    try {
        const person = new Person(body)
        const creado = await person.save()

        res.status(201).json({
            msg:"Usuario creado",
            creado
        })
        
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})




module.exports = router