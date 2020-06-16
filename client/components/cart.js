import React from 'react'
import {removeSneakerFromCart} from '../store/cart'
import {connect} from 'react-redux'

export class Cart extends React.Component {
  render() {
    // const { cart, removeSneakerFromCart } = this.props
    return (
      //   <div>
      //     {cart.length === 0 ? (
      //       <div>
      //         Empty Cart
      //       </div>

      //     ) : (
      //         cart.map(sneaker => (
      //           <div key={sneaker.id}>
      //             <div>
      //               <button type='button'
      //                 onClick={() => removeSneakerFromCart(sneaker.id)}>

      //               </button>
      //             </div>

      //             <div>
      //               <image src={sneaker.media} />
      //             </div>

      //             <div>
      //               {sneaker.title}
      //             </div>

      //             <div>
      //               {sneaker.retailPrice}

      //             </div>
      //           </div>
      //         ))
      //       )}
      //   </div>
      <div>Hello</div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state
})

const mapDispatchToProps = dispatch => ({
  removeSneakerFromCart: id => dispatch(removeSneakerFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
