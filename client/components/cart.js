import React from 'react'
import {removeSneakerThunk, getCartThunk, getQuantityThunk} from '../store/cart'
import {connect} from 'react-redux'
import {Button, Container} from 'react-bootstrap'
import CartTotal from './cart-total'
import M from 'materialize-css'

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
        <Container xs={1}>
          {cart.length ? (
            <div>
              {cart.map(sneaker => (
                <div key={sneaker.id}>
                  <div />
                  <div>
                    <img src={sneaker.media} />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="center">
                      Edit Quantity
                    </label>
                    <select
                      className="browser-default"
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
                  <Button
                    className="center"
                    type="button"
                    variant="danger"
                    onClick={() => removeSneaker(user.id, sneaker.id)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <div className="col s12 l3 center">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title center center">
                      {' '}
                      <CartTotal />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container center">
              <h3 className="text-center">Your cart is empty</h3>
            </div>
          )}
        </Container>
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
