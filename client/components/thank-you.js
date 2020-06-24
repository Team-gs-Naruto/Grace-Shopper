import React from 'react'
import Slider from './slider'
import {Link} from 'react-router-dom'

const random = () => {
  const num = Math.floor(Math.random() * 1000)
  const starting = 156000
  return num + starting
}
const order = random()

const ThankYou = () => {
  return (
    <div className="container center">
      <img
        src="https://media.giphy.com/media/3o7qE9hafMPIPeJMvC/giphy.gif"
        className="center"
      />
      <h1 className="grey-text center">Thank you for shopping with us!</h1>
      <h2 className="grey-text center">Order #{order}</h2>
      <Link to="/shop">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <a className="waves-effect btn-large grey">
          <i className="material-icons right">shopping_bag</i>Keep Shopping
        </a>
      </Link>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp;
      <Slider />
    </div>
  )
}
export default ThankYou
