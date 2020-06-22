'use strict'
const db = require('../server/db')
const {User, Sneakers} = require('../server/db/models')
const Axios = require('axios')
const chance = require('chance')(123)
let allSneakers = []
if (process.env.NODE_ENV !== 'production') require('../new-secrets')
const getSneakersFromSwagger = async () => {
  const nikeSneakers = await Axios.get(
    `http://api.thesneakerdatabase.com/v1/sneakers?limit=34&brand=Nike`
  )
  const adidasSneakers = await Axios.get(
    `http://api.thesneakerdatabase.com/v1/sneakers?limit=33&brand=Adidas`
  )
  const pumaSneakers = await Axios.get(
    `http://api.thesneakerdatabase.com/v1/sneakers?limit=33&brand=Puma`
  )
  allSneakers = allSneakers.concat(
    nikeSneakers.data.results,
    adidasSneakers.data.results,
    pumaSneakers.data.results
  )
}
const createSeedData = () => {
  const defaultMedia =
    'https://cdn5.vectorstock.com/i/thumb-large/53/94/running-shoe-sneaker-silhouette-vector-2575394.jpg'
  return allSneakers.map(sneaker => {
    return {
      brand: sneaker.brand,
      colorway: sneaker.colorway,
      media: sneaker.media.thumbUrl.length
        ? sneaker.media.thumbUrl
        : defaultMedia,
      imageUrl: sneaker.media.smallImageUrl.length
        ? sneaker.media.smallImageUrl
        : defaultMedia,
      releaseDate: sneaker.releaseDate,
      retailPrice: sneaker.retailPrice,
      styleId: sneaker.styleId,
      title: sneaker.title,
      year: sneaker.year
    }
  })
}
const numUsers = 35
const emails = chance.unique(chance.email, numUsers)
function doTimes(n, fn) {
  const results = []
  while (n--) {
    results.push(fn())
  }
  return results
}
function newUser() {
  return User.build({
    email: emails.pop(),
    password: chance.word(),
    isAdmin: chance.weighted([true, false], [5, 95])
  })
}
function generateUsers() {
  const users = doTimes(numUsers, newUser)
  return users
}
const createUsers = async () => {
  return generateUsers().map(user => user.save())
}
async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await createUsers()
  const admin = await User.create({
    email: process.env.ADMIN_USER_EMAIL,
    password: process.env.ADMIN_USER_PASSWORD,
    isAdmin: true
  })
  admin.save()
  const sneakers = await Promise.all(
    createSeedData().map(sneaker => Sneakers.create(sneaker))
  )
  console.log(`seeded ${users.length} users`)
  console.log(`seeded 1 admin`)
  console.log(`seeded ${sneakers.length} sneakers`)
  console.log(`seeded successfully`)
}
// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await getSneakersFromSwagger()
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}
// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}
// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
