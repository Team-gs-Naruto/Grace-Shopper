import React from 'react'
import {connect} from 'react-redux'
import ShopPageSneaker from './Sneaker'
import {Link} from 'react-router-dom'
import {fetchSneakers} from '../store/all-sneakers'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class AllSneakers extends React.Component {
  componentDidMount() {
    this.props.fetchSneakers()
  }

  render() {
    const sneakers = this.props.sneakers

    return (
      <div>
        <h1>All Sneakers</h1>
        {sneakers.map(sneaker => (
          <div key={sneaker.id}>
            <Container>
              <Row>
                <Col sm={1}>
                  <Link to={`/shop/${sneaker.id}`}>
                    <ShopPageSneaker className="wrap" sneaker={sneaker} />
                  </Link>
                </Col>
              </Row>
            </Container>
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
