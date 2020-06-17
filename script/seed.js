'use strict'
const sneakerSeed = require('../seedSneakers')
const db = require('../server/db')
const {User, Sneakers} = require('../server/db/models')

const createSeedData = () => {
  const defaultMedia =
    'https://cdn5.vectorstock.com/i/thumb-large/53/94/running-shoe-sneaker-silhouette-vector-2575394.jpg'
  return sneakerSeed.map(sneaker => {
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

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  // console.log('hererer', sneakerSeed)
  const sneakers = await Promise.all(
    createSeedData().map(sneaker => Sneakers.create(sneaker))
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
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
