import React from 'react'
import {removeSneakerThunk, getCartThunk} from '../store/cart'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.match.params.userId || null)
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
            </div>
          ))
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
  cart: state.cart,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  removeSneaker: (userId, sneakerId) =>
    dispatch(removeSneakerThunk(userId, sneakerId)),
  getCart: id => dispatch(getCartThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
