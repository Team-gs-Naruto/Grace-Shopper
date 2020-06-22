import React from 'react'
import {updateQty, removeSneakerThunk, getCartThunk} from '../store/cart'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'

export class Cart extends React.Component {
  constructor() {
    super()
    this.increment = this.increment.bind()
    this.decrement = this.decrement.bind
  }
  componentDidMount() {
    this.props.getCart(this.props.match.params.userId || null)
    const id = this.props.match.params.id
  }
  increment(item, cart) {
    this.props.updateQty({
      id: item.id,
      quantity: item.quantity,
      userId
    })
  }
  decrement(item, cart) {
    this.props.updateQty({
      id: item.id,
      quantity: item.quantity,
      userId
    })
  }

  render() {
    const {cart, removeSneaker, user} = this.props

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
              {sneaker.purchase ? (
                <div>{sneaker.purchase.quantity}</div>
              ) : (
                <div>null</div>
              )}
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
  cart: state.cart,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  removeSneaker: (userId, sneakerId) =>
    dispatch(removeSneakerThunk(userId, sneakerId)),
  getCart: id => dispatch(getCartThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
