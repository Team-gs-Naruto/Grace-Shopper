import React from 'react'
import {expect} from 'chai'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {spy} from 'sinon'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

const mockStore = configureStore([])

import AllSneakers from '../all-sneakers'
import ShopPageSneaker from '../sneaker'

xdescribe('AllSneakers component', () => {
  let allSneakers
  let sneaker
  let store
  beforeEach('Create component', () => {
    store = mockStore({
      allSneakers: [
        {id: 1, brand: 'Nike', media: 'shoe.jpg'},
        {id: 2, brand: 'Jordan', media: 'shoe.jpg'},
        {id: 3, brand: 'Adidas', media: 'shoe.jpg'}
      ]
    })
    allSneakers = renderer.create(
      <Provider store={store}>
        <AllSneakers />
      </Provider>
    )
  })
  it('renders all sneakers', () => {
    // expect(allSneakers.find(sneaker).length).to.be.equal(1)
    expect(allSneakers.toJSON()).toMatchSnapshot()
  })
})
