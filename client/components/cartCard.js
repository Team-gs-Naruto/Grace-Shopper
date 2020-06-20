import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../store/cart'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class CartCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const sneaker = this.props.userCart.item

    return (
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={sneaker.media} />
        <Card.Body>
          <Card.Title>{sneaker.title}</Card.Title>
          <Card.Text>{sneaker.brand}</Card.Text>
          <Card.Text>{sneaker.colorway}</Card.Text>
          <Card.Text>{sneaker.releaseDate}</Card.Text>
          <Card.Text>{sneaker.retailPrice}</Card.Text>
          <Button
            variant="primary"
            onClick={() => this.props.removeFromCart(sneaker)}
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    item:
      state.cartReducer.userCart.find[
        sneaker => sneaker.id === ownProps.userCart.sneaker.id
      ]
  }
}
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: sneaker => dispatch(removeFromCart(sneaker))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCard)
