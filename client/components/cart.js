import React from 'react'
import {removeFromCart, fetchCartFromStorage} from '../store/cart'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'

export class Cart extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    this.props.fetchCartFromStorage()
  }
  render() {
    let sneakers = this.props.userCart
    return (
      <div>
        {sneakers ? (
          sneakers.map(sneaker => (
            <div key={sneaker.id}>
              <div>
                <Button
                  type="button"
                  variant="danger"
                  onClick={() => removeSneaker(sneaker.id)}
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
  userCart: state.cartReducer.userCart
})

const mapDispatchToProps = dispatch => ({
  fetchCartFromStorage: () => dispatch(fetchCartFromStorage())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
