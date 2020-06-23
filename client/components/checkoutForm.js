import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {clearingCart} from '../store/cart'

export class Form extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.clearingCart(this.props.cartItems[0].purchase.orderId)
  }

  handleSubmit() {
    if (this.props.isLoggedIn) {
      this.props.clearingCart(this.props.cartItems[0].purchase.orderId)
    } else {
      localStorage.setItem('cart', JSON.stringify([]))
    }
  }
  render() {
    console.log(
      this.props.clearingCart(this.props.cartItems[0].purchase.orderId)
    )
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input required />
          <label>Address</label>
          <input required />
          <Link to="/thankyou">
            <button type="button">Submit Order</button>
          </Link>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cartItems: state.cart
  }
}
const mapDispatch = dispatch => ({
  clearingCart: orderId => dispatch(clearingCart(orderId))
})

export default connect(mapState, mapDispatch)(Form)
