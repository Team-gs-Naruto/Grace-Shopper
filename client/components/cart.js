import React from 'react'
import {removeSneakerThunk, getCartThunk, getQuantityThunk} from '../store/cart'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'
import CartTotal from './cart-total'
import {Link} from 'react-router-dom'
export class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.user.id || null)
  }

  componentDidUpdate(prevState) {
    if (prevState.user.id !== this.props.user.id) {
      this.props.getCart(this.props.user.id || null)
    }
  }

  render() {
    const {user, cart, removeSneaker} = this.props
    return (
      <div>
        {cart.length ? (
          <div>
            {cart.map(sneaker => (
              <div key={sneaker.id}>
                <div>
                  <Button
                    type="button"
                    variant="danger"
                    onClick={() => removeSneaker(user.id, sneaker.id)}
                  >
                    Remove
                  </Button>
                </div>
                <div>
                  <img src={sneaker.media} />
                </div>
                <div>
                  <label className="quantity" htmlFor="quantity">
                    Edit Quantity
                  </label>
                  <select
                    value={sneaker.purchase.quantity}
                    onChange={event =>
                      this.props.getQuantity(
                        user.id,
                        sneaker.id,
                        event.target.value
                      )
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div>{sneaker.title}</div>
                <div>{sneaker.retailPrice}</div>
              </div>
            ))}
            <CartTotal />
            <Link to="/cart/checkout">
              <button type="button">Checkout</button>
            </Link>
          </div>
        ) : (
          <div>
            <h3 className="text-center">Your cart is empty</h3>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  removeSneaker: (userId, sneakerId) =>
    dispatch(removeSneakerThunk(userId, sneakerId)),
  getCart: id => dispatch(getCartThunk(id)),
  getQuantity: (userId, sneakerId, quantity) =>
    dispatch(getQuantityThunk(userId, sneakerId, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
