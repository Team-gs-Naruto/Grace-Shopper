import React from 'react'

const random = () => {
  const num = Math.floor(Math.random() * 1000)
  const starting = 156000
  return num + starting
}
const order = random()

const ThankYou = () => {
  return (
    <div>
      <h1>Thank you for shopping with us!</h1>
      <h3>Order #{order}</h3>
    </div>
  )
}
export default ThankYou
