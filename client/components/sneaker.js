import React from 'react'
import {Col} from 'react-bootstrap'

const ShopPageSneaker = props => {
  const {sneaker} = props
  return (
    <div className="card hoverable small">
      <div className="card-image responsive-media">
        <img src={sneaker.media} />
      </div>
      <div className="card-content">
        <p className="card-text center">{sneaker.title}</p>
        {Number(sneaker.retailPrice) ? (
          <h6 className="center">${sneaker.retailPrice}</h6>
        ) : (
          <h6 className="center">Sold Out</h6>
        )}
      </div>
    </div>
  )
}

export default ShopPageSneaker
