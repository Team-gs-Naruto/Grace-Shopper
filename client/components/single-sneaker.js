import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleSneaker} from '../store/single-sneaker'
import {addSneakerToCartThunk} from '../store/cart'

export class SingleSneaker extends React.Component {
  componentDidMount() {
    this.props.fetchSingleSneaker(this.props.match.params.id)
  }

  handleClick = sneaker => {
    this.props.addToCart(sneaker, this.props.user.id || null)
  }

  render() {
    const sneaker = this.props.sneaker

    return (
      <div>
        <span className="card horizontal">
          <h1 className="center grey-text text-darken-2">{sneaker.title}</h1>
        </span>

        <div className="row">
          <div className="col s6 offset-s3">
            <div className="card">
              <div className="card-image">
                <img src={sneaker.imageUrl} />
                <a className="btn-floating halfway-fab waves-effect waves-light red">
                  <i
                    className="material-icons"
                    type="button"
                    onClick={() => {
                      this.handleClick(sneaker)
                    }}
                  >
                    add
                  </i>
                </a>
              </div>
              <div className="card-content">
                <h5 className="center grey-text text-darken-2">
                  ${sneaker.retailPrice}
                </h5>
                <p className="center grey-text text-darken-2">
                  Color Way: {sneaker.colorWay}
                </p>
                <p className="center grey-text text-darken-2">
                  Brand: {sneaker.brand}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  sneaker: state.singleSneaker,
  user: state.user
})

const mapDispatch = dispatch => ({
  fetchSingleSneaker: id => dispatch(fetchSingleSneaker(id)),
  addToCart: (sneakerId, userId, sneakerPrice) =>
    dispatch(addSneakerToCartThunk(sneakerId, userId, sneakerPrice))
})

export default connect(mapState, mapDispatch)(SingleSneaker)
