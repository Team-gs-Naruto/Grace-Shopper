import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleSneaker} from '../store/single-sneaker'

export class SingleSneaker extends React.Component {
  componentDidMount() {
    this.props.fetchSingleSneaker(this.props.match.params.id)
  }

  render() {
    const sneaker = this.props.sneaker

    return (
      <div>
        <h1>{sneaker.title}</h1>
        <img src={sneaker.imageUrl} />
        <div>${sneaker.retailPrice}</div>

        <h3>DESCRIPTION</h3>
        <div>Brand: {sneaker.brand}</div>
        <div>Color Way: {sneaker.colorWay}</div>
        <div>Release Date: {sneaker.releaseDate}</div>
        <div>Style ID: {sneaker.styleId}</div>

        <button type="button">Add to Cart</button>
      </div>
    )
  }
}

const mapState = state => ({
  sneaker: state.singleSneaker
})

const mapDispatch = dispatch => ({
  fetchSingleSneaker: id => dispatch(fetchSingleSneaker(id))
})

export default connect(mapState, mapDispatch)(SingleSneaker)
