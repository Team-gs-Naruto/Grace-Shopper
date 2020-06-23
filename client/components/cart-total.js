import React from 'react'
import {connect} from 'react-redux'

const CartTotal = props => {
  const {cartItems, isLoggedIn} = props
  if (isLoggedIn) {
    console.log('cart items:', cartItems)
  }

  return (
    <div>
      <p>Your total is {}</p>
    </div>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cartItems: state.cart
  }
}

export default connect(mapState)(CartTotal)
