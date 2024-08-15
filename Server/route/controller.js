const express = require('express')
const router = express.Router()
const Alien = require('../Model/model')


router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    }
    catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }

    catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async (req, res) => {

    const alien = new Alien({
        Moviename: req.body.Moviename,
        releasedata: req.body.releasedata,
        DidyouWatch: req.body.DidyouWatch,
        rating: req.body.rating,
        genre: req.body.genre
    })

    try {
        const a1 = await alien.save()
        res.json(a1)
    }
    catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    }
    catch (err) {
        res.send('Error')
    }

})

module.exports = router
