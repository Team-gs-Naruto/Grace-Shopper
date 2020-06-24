import React from 'react'
import {removeSneakerThunk, getCartThunk, getQuantityThunk} from '../store/cart'
import {connect} from 'react-redux'
import {Button, Container} from 'react-bootstrap'
import CartTotal from './cart-total'
import M from 'materialize-css'
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
      <section className="products">
        <div>
          {cart.length ? (
            <div>
              {cart.map(sneaker => (
                <div key={sneaker.id}>
                  <div />

                  <div>
                    <div className="container m3">
                      <button
                        className="btn-floating waves-effect waves-light red left "
                        type="button"
                        onClick={() => removeSneaker(user.id, sneaker.id)}
                      >
                        <i className="material-icons">remove</i>
                      </button>
                    </div>
                    <div className="row">
                      <div className="col offset-m1 s8">
                        <div className="card horizontal">
                          <div className="card-image">
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
                              <option className="center-text" value="1">
                                1
                              </option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                          <div className="col s12 l6 left">
                            <h6>{sneaker.title}</h6>
                          </div>
                          <h5 className="col s12 l1 right black-text">
                            ${sneaker.retailPrice}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
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
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
        <div className="container center ">
          <Link to="/cart/checkout">
            <div className="col offset-m3 s8">
              <a
                type="button"
                className="grey waves-effect waves-light btn-large"
              >
                Checkout
              </a>
            </div>
          </Link>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
      </section>
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
