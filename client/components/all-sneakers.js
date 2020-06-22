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
        <div className="text-center">
          <h1>All Sneakers</h1>
        </div>
        <div>
          <label className="category" htmlFor="category">
            Category
          </label>
          <select onChange={event => this.props.fetchBrand(event.target.value)}>
            <option value="">All</option>
            <option value="Nike">Nike</option>
            <option value="adidas">Adidas</option>
            <option value="Puma">Puma</option>
          </select>
        </div>
        <Container>
          <Row>
            {sneakers.map(sneaker => (
              <div key={sneaker.id}>
                <Col>
                  {/* <Link to={`/shop/${sneaker.id}`}> */}
                  <ShopPageSneaker sneaker={sneaker} />
                  {/* </Link> */}
                </Col>
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
