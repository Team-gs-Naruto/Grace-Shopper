import React from 'react'
import {connect} from 'react-redux'
import ShopPageSneaker from './sneaker'
import {Link} from 'react-router-dom'
import {fetchSneakers, getBrand} from '../store/all-sneakers'
import {Container, Row, Col} from 'react-bootstrap'

export class AllSneakers extends React.Component {
  componentDidMount() {
    this.props.fetchSneakers()
  }

  render() {
    const sneakers = this.props.sneakers

    return (
      <div>
        <label className="category" htmlFor="category">
          Categories
        </label>
        <div className="input-field col s12">
          <select onChange={event => this.props.fetchBrand(event.target.value)}>
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="">All</option>
            <option value="Nike">Nike</option>
            <option value="adidas">Adidas</option>
            <option value="Puma">Puma</option>
          </select>
        </div>

        <Container>
          <Row className="justify-content-md-center">
            {sneakers.map(sneaker => (
              <div key={sneaker.id}>
                <div className="col s3 m3">
                  <Link to={`/shop/${sneaker.id}`}>
                    <ShopPageSneaker sneaker={sneaker} />
                  </Link>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

const mapState = state => {
  const allSneakers = state.allSneakers
  if (!allSneakers.brand) {
    return {
      sneakers: state.allSneakers.sneakers
    }
  }
  return {
    sneakers: state.allSneakers.sneakers.filter(
      sneaker => sneaker.brand === allSneakers.brand
    )
  }
}

const mapDispatch = dispatch => ({
  fetchSneakers: () => dispatch(fetchSneakers()),
  fetchBrand: brand => dispatch(getBrand(brand))
})

export default connect(mapState, mapDispatch)(AllSneakers)
