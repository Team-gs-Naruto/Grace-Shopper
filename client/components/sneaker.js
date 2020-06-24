import React from 'react'

const ShopPageSneaker = props => {
  const {sneaker} = props
  return (
    <div className="card hoverable medium">
      <div className="card-image responsive-media">
        <img src={sneaker.media} />
      </div>
      <div className="card-content">
        <p className="card-text center grey-text text-darken-3">
          {sneaker.title}
        </p>
        {Number(sneaker.retailPrice) ? (
          <h6 className="center grey-text text-darken-3">
            ${sneaker.retailPrice}
          </h6>
        ) : (
          <h6 className="center grey-text text-darken-3">Sold Out</h6>
        )}
      </div>
    </div>
  )
}

export default ShopPageSneaker
