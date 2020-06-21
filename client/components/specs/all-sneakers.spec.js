import React from 'react'
import {expect} from 'chai'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {spy} from 'sinon'

import AllSneakers from '../all-sneakers'
import ShopPageSneaker from '../sneaker'

describe('AllSneakers component', () => {
  const sneakers = [
    {id: 1, brand: 'Nike'},
    {id: 2, brand: 'Jordan'},
    {id: 3, brand: 'Adidas'}
  ]
  let allSneakers
  let sneaker
  beforeEach('Create component', () => {
    allSneakers = shallow(<AllSneakers />)
    sneaker = shallow(<ShopPageSneaker />)
  })
  it('renders all sneakers', () => {
    expect(allSneakers.find(sneaker).length).to.be.equal(3)
  })
})
