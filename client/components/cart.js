import React from 'react'
import {removeSneakerFromCart, getCartThunk} from '../store/cart'
import {connect} from 'react-redux'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.match.params.userId)
  }

  render() {
    const {cart, removeSneaker} = this.props

    return (
      <div>
        {cart && cart.sneakers ? (
          cart.sneakers.map(sneaker => (
            <div key={sneaker.sneakerId}>
              <div>
                <button
                  type="button"
                  onClick={() => removeSneaker(sneaker.id)}
                />
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
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  removeSneaker: id => dispatch(removeSneakerFromCart(id)),
  getCart: id => dispatch(getCartThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
