import React from 'react'
import {connect} from 'react-redux'

const reduceCart = cart => {
  let quantities = cart.map(item => item.purchase.quantity)
  let price = cart.map(item => item.retailPrice)
  let total = 0
  for (let i = 0; i < quantities.length; i++) {
    total += quantities[i] * price[i]
  }
  return total
}

const CartTotal = props => {
  const {cartItems, isLoggedIn} = props
  let total

  if (isLoggedIn) {
    total = reduceCart(cartItems)
  }
  return (
    <div>
      <p>Your total is ${total}</p>
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
