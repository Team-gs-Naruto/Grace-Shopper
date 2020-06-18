import React from 'react'
import {removeSneakerFromCart} from '../store/cart'
import {connect} from 'react-redux'
import {savingOrder} from '../store/cart'

export class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    this.props.savingOrder(this.props.match.params.id)
    this.setState({
      items: this.props.cart.items
    })
  }
  render() {
    const items = this.state.items
    console.log('props is: ', this.props)

    return (
      <div>
        {items ? (
          items.map(sneaker => (
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
  removeSneakerFromCart: id => dispatch(removeSneakerFromCart(id)),
  savingOrder: id => dispatch(savingOrder(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
