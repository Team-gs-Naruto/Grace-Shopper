import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {clearCartThunk} from '../store/cart'

export class Form extends React.Component {
  render() {
    const {user, clearingCart} = this.props
    return (
      <div>
        <form>
          <label>Name</label>
          <input required />
          <label>Address</label>
          <input required />
          <Link to="/thankyou">
            <button type="submit" onClick={() => clearingCart(user.id)}>
              Submit Order
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cartItems: state.cart,
    user: state.user
  }
}
const mapDispatch = dispatch => ({
  clearingCart: userId => dispatch(clearCartThunk(userId))
})

export default connect(mapState, mapDispatch)(Form)
