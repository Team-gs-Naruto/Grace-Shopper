import React from 'react'
import {connect} from 'react-redux'
import ShopPageSneaker from './sneaker'
import {Link} from 'react-router-dom'
import {fetchSneakers} from '../store/all-sneakers'
import {Pagination, Container, Row, Col} from 'react-bootstrap'

export class AllSneakers extends React.Component {
  componentDidMount() {
    this.props.fetchSneakers(3)
  }

  render() {
    const sneakers = this.props.sneakers.sneakers
    console.log('sneakers:', sneakers)
    console.log('props:', this.props)

    return (
      <div>
        <div className="text-center">
          <h1>All Sneakers</h1>
        </div>
        <Container>
          <Row>
            {sneakers &&
              sneakers.map(sneaker => (
                <div key={sneaker.id}>
                  <Col>
                    <Link to={`/shop/${sneaker.id}`}>
                      <ShopPageSneaker sneaker={sneaker} />
                    </Link>
                  </Col>
                </div>
              ))}
          </Row>
        </Container>
        <div>
          <Pagination size="lg" />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  sneakers: state.allSneakers
})

const mapDispatch = dispatch => ({
  fetchSneakers: pageNumber => dispatch(fetchSneakers(pageNumber))
})

export default connect(mapState, mapDispatch)(AllSneakers)
