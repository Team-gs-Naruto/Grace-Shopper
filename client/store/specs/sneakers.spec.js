import {expect} from 'chai'
import MockAxiosAdapter from 'axios-mock-adapter'
import axios from 'axios'
import {createStore, applyMiddleware} from 'redux'
import enforceImmutableState from 'redux-immutable-state-invariant'
import {setSneakers, fetchSneakers} from '../all-sneakers'
import {setSneaker, fetchSingleSneaker} from '../single-sneaker'
import {reducer} from '../index'
import thunkMiddleware from 'redux-thunk'

let store
let mockAxios

describe('Action creators', () => {
  describe('setSneaker', () => {
    it('returns properly formatted action', () => {
      const sneaker = {id: 1, brand: 'Nike'}

      expect(setSneaker(sneaker)).to.be.deep.equal({
        type: 'GET_SINGLE_SNEAKER',
        sneaker: sneaker
      })
    })
  })

  describe('setSneakers', () => {
    it('returns properly formatted action', () => {
      const sneakers = [
        {id: 1, brand: 'Nike'},
        {id: 2, brand: 'Jordan'},
        {id: 3, brand: 'Adidas'}
      ]

      expect(setSneakers(sneakers)).to.be.deep.equal({
        type: 'SET_SNEAKERS',
        sneakers: sneakers
      })
    })
  })
})

describe('Sneakers thunks', () => {
  beforeEach(() => {
    mockAxios = new MockAxiosAdapter(axios)
    store = createStore(
      reducer,
      applyMiddleware(thunkMiddleware, enforceImmutableState())
    )
  })
  afterEach(() => {
    mockAxios.restore()
  })
  describe('GET /sneakers', () => {
    beforeEach(() => {
      mockAxios
        .onGet('/api/sneakers')
        .reply(200, [
          {id: 1, brand: 'Nike'},
          {id: 2, brand: 'Jordan'},
          {id: 3, brand: 'Adidas'}
        ])
    })

    it('sets the received sneakers to the state', async () => {
      await store.dispatch(fetchSneakers())
      const state = store.getState()
      expect(state.allSneakers).to.deep.equal([
        {id: 1, brand: 'Nike'},
        {id: 2, brand: 'Jordan'},
        {id: 3, brand: 'Adidas'}
      ])
    })
  })
  describe('GET /sneakers/:id', () => {
    beforeEach(() => {
      mockAxios.onGet('/api/sneakers/1').reply(200, [{id: 1, brand: 'Nike'}])
    })
    it('sets a single sneaker to the state', async () => {
      await store.dispatch(fetchSingleSneaker(1))
      const state = store.getState()
      expect(state.singleSneaker).to.deep.equal([{id: 1, brand: 'Nike'}])
    })
  })
})
