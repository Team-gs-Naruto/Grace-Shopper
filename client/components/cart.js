import React from 'react'
import {fetchCartFromStorage} from '../store/cart'
import {connect} from 'react-redux'
import CartCard from './cartCard'

export class Cart extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    this.props.fetchCartFromStorage()
  }
  render() {
    let items = this.props.userCart
    return (
      <div>
        {items.map(item => {
          return <CartCard key={item.id} userCart={item} />
        })}
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
