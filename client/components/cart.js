import React from 'react'
import {updateQty, removeSneakerThunk, getCartThunk} from '../store/cart'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.user.id || null)
  }

  componentDidUpdate(prevState) {
    if (prevState.user.id !== this.props.user.id) {
      this.props.getCart(this.props.user.id || null)
    }
  }
  handleClick() {}
  render() {
    const {user, cart, removeSneaker} = this.props

    return (
      <div>
        {cart.length ? (
          cart.map(sneaker => (
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

              <div>{sneaker.title}</div>

              <div>{sneaker.retailPrice}</div>

              <div>Quantity: {sneaker.purchase.quantity}</div>

              <button
                type="button"
                value="decrement"
                onClick={() => {
                  this.handleClick(event, sneaker)
                }}
              >
                Decrease Qty
              </button>
              <button
                type="button"
                value="increment"
                onClick={() => {
                  this.handleClick(event, sneaker)
                }}
              >
                Increase Qty
              </button>
            </div>
          ))
        ) : (
          <div className="container center">
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
  getCart: id => dispatch(getCartThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
