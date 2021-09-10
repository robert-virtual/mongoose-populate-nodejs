const router = require('express').Router()
require('../database')
const Author = require('../models/Author')


router.get('/',async (req,res)=>{

    try {

        const authors = await Author.find()
        res.json({
            authors
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
        const author = new Author(body)
        const creado = await author.save()

        res.status(201).json({
            msg:"Author creado",
            creado
        })
        
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})

router.post('/book/:id',getAuthor,async (req,res)=>{

    const {body} = req

    res.json({
        author:res.author
    })
    // try {
    //     const author = new Author(body)
    //     const creado = await author.save()

    //     res.status(201).json({
    //         msg:"Author creado",
    //         creado
    //     })
        
    // } catch (error) {
    //     res.status(500).json({
    //         error
    //     })
    // }
})


async function getAuthor(req,res,next) {
    const {id} = req.params   

    try {
        const author = await Author.findById(id)
        if (author === null) {
            return res.status(400).json({
                error:"no se encontro ningun usuario con el id " + id
            })
        }
        res.author = author
        next()
    } catch (error) {
        res.status(500).json({
            error
        })
    }

}



module.exports = router