const router = require('express').Router()
const {Sneakers} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const sneakers = await Sneakers.findAll()
    console.log(sneakers)
    res.json(sneakers)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleSneaker = await Sneakers.findByPk(req.params.id)
    res.json(singleSneaker)
  } catch (error) {
    next(error)
  }
})
