const db = require('../db')

const sneakerSeed = [
  {
    id: '1',
    brand: 'Nike',
    colorway: 'White/Deep Royal Blue-White',
    gender: 'preschool',
    media: {
      imageUrl:
        'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-Deep-Royal-Blue-PS.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1585035386',
      smallImageUrl:
        'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-Deep-Royal-Blue-PS.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1585035386',
      thumbUrl:
        'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-Deep-Royal-Blue-PS.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1585035386'
    },
    releaseDate: '2020-12-15 23:59:59',
    retailPrice: 58,
    styleId: 'CU0816-102',
    title: 'Nike Air Force 1 Low White Deep Royal Blue (PS)',
    year: 2020
  },
  {
    id: '2',
    brand: 'Nike',
    colorway: 'Atomic Violet/Court Purple-University Gold',
    gender: 'men',
    media: {
      imageUrl:
        'https://stockx.imgix.net/Nike-LeBron-16-Low-Atomic-Violet.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1564511230',
      smallImageUrl:
        'https://stockx.imgix.net/Nike-LeBron-16-Low-Atomic-Violet.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1564511230',
      thumbUrl:
        'https://stockx.imgix.net/Nike-LeBron-16-Low-Atomic-Violet.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1564511230'
    },
    releaseDate: '2020-08-29 23:59:59',
    retailPrice: 150,
    styleId: 'CI2668-500/CI2669-500',
    title: 'Nike LeBron 16 Low Atomic Violet',
    year: 2020
  },
  {
    id: '3',
    brand: 'Nike',
    colorway: 'White/White/Black',
    gender: 'men',
    media: {
      imageUrl:
        'https://stockx.imgix.net/Nike-Air-Force-One-LV8-UL-Utility-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566314879',
      smallImageUrl:
        'https://stockx.imgix.net/Nike-Air-Force-One-LV8-UL-Utility-White.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566314879',
      thumbUrl:
        'https://stockx.imgix.net/Nike-Air-Force-One-LV8-UL-Utility-White.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566314879'
    },
    releaseDate: '2020-08-15 23:59:59',
    retailPrice: 160,
    styleId: 'CQ4611-100',
    title: 'Nike Air Force One LV8 UL Utility White',
    year: 2020
  }
]

module.exports = sneakerSeed
