import React from 'react'

const ShopPageSneaker = props => {
  const {sneaker} = props
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={sneaker.media} />
            <span className="card-title">{sneaker.title}</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </a>
          </div>
          <div className="card-content">
            <p>{sneaker.retailPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPageSneaker
