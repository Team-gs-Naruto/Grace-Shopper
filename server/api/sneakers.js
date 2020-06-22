const router = require('express').Router()
const {Sneakers} = require('../db/models')
const checkAuth = require('./permissions.middleware')

module.exports = router

// router.get('/', async (req, res, next) => {
//   try {
//     const sneakers = await Sneakers.findAll()
//     res.json(sneakers)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/', async (req, res, next) => {
  try {
    const sneakers = await Sneakers.findAll()

    const page = +req.query.page
    const limit = +req.query.limit

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if (endIndex < sneakers.length)
      results.next = {
        page: page + 1,
        limit: limit
      }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }

    results.sneakers = sneakers.slice(startIndex, endIndex)
    res.json(results)
  } catch (error) {
    next(error)
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

router.put(
  '/',
  checkAuth.notAGuest,
  checkAuth.isAdmin,
  async (req, res, next) => {
    try {
      //api to create new sneaker, only accessible to admins
    } catch (err) {
      next(err)
    }
  }
)

router.delete(
  '/:id',
  checkAuth.notAGuest,
  checkAuth.isAdmin,
  async (req, res, next) => {
    try {
      //api to create new sneaker, only accessible to admins
    } catch (err) {
      next(err)
    }
  }
)
