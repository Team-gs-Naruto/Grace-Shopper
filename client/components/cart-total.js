import React from 'react'
import {connect} from 'react-redux'

const CartTotal = props => {
  const {cartItems, isLoggedIn} = props
  console.log(cartItems)
  // if (isLoggedIn) {
  // }

  return (
    <div>
      <p>Your total is {}</p>
    </div>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

export default connect(mapState)(CartTotal)
