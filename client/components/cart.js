import React from 'react'
import {removeSneakerFromCart} from '../store/cart'
import {connect} from 'react-redux'

export class Cart extends React.Component {
  render() {
    const {cart, removeSneakerFromCart} = this.props

    return (
      <div>
        {cart ? (
          cart.map(sneaker => (
            <div key={sneaker.id}>
              <div>
                <button
                  type="button"
                  onClick={() => removeSneakerFromCart(sneaker.id)}
                />
              </div>

              <div>
                <image src={sneaker.media} />
              </div>

              <div>{sneaker.title}</div>

              <div>{sneaker.retailPrice}</div>
            </div>
          ))
        ) : (
          <div>
            <h3 className="center">Your cart is empty</h3>
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
  removeSneakerFromCart: id => dispatch(removeSneakerFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
