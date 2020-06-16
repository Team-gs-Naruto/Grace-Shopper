import React from 'react'

const ShopPageSneaker = props => {
  const {sneaker} = props
  return (
    <div>
      <div>Title: {sneaker.title}</div>
      <img src={sneaker.media} />
      <div>Price: {sneaker.retailPrice}</div>
    </div>
  )
}

export default ShopPageSneaker
