import React from 'react'
import {connect} from 'react-redux'
import ShopPageSneaker from './Sneaker'
import {Link} from 'react-router-dom'
import {fetchSneakers} from '../store/all-sneakers'

export class AllSneakers extends React.Component {
  componentDidMount() {
    this.props.fetchSneakers()
  }

  render() {
    const sneakers = this.props.sneakers

    return (
      <div>
        <div className="text-center">
          <h1>All Sneakers</h1>
        </div>

        {sneakers.map(sneaker => (
          <div key={sneaker.id}>
            <Link to={`/shop/${sneaker.id}`}>
              <ShopPageSneaker sneaker={sneaker} />
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => ({
  sneakers: state.allSneakers
})

const mapDispatch = dispatch => ({
  fetchSneakers: () => dispatch(fetchSneakers())
})

export default connect(mapState, mapDispatch)(AllSneakers)