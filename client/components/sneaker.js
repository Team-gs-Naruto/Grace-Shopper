import React from 'react'

const ShopPageSneaker = props => {
  const {sneaker} = props
  return (
    <div className="card hoverable small">
      <div className="card-image responsive-media">
        <img src={sneaker.media} />
      </div>
      <div className="card-content">
        <p className="card-text center black-text">{sneaker.title}</p>
        {Number(sneaker.retailPrice) ? (
          <h6 className="center black-text">${sneaker.retailPrice}</h6>
        ) : (
          <h6 className="center black-text">Sold Out</h6>
        )}
      </div>
    </div>
  )
}

export default ShopPageSneaker
