import MockAxiosAdapter from 'axios-mock-adapter'
import {expect} from 'chai'
import axios from 'axios'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import enforceImmutableState from 'redux-immutable-state-invariant'
import {reducer} from '../index'
import {fetchOneUser, fetchUsers} from '../all-users'
import {fetchSneakers} from '../all-sneakers'
import {fetchSingleSneaker} from '../single-sneaker'

let store
let mockAxios

describe('All of our thunks', () => {
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

  describe('GET /api/users succeeds', () => {
    beforeEach(() => {
      mockAxios
        .onGet('/api/users')
        .reply(200, [
          {email: 'zu@zu.com'},
          {email: 'cody@cody.com'},
          {email: 'zafary@aol.com'}
        ])
    })
    it('sets the received users to the state', async () => {
      await store.dispatch(fetchUsers())
      const state = store.getState()
      expect(state.allUsers.users).to.deep.equal([
        {email: 'zu@zu.com'},
        {email: 'cody@cody.com'},
        {email: 'zafary@aol.com'}
      ])
    })
  })
  describe('GET /api/users/1 ', () => {
    beforeEach(() => {
      mockAxios.onGet('/api/users/1').reply(200, {email: 'zu@zu.com'})
    })
    it('sets the received user to state', async () => {
      await store.dispatch(fetchOneUser(1))
      const state = store.getState()
      expect(state.allUsers.userToPreview).to.deep.equal({email: 'zu@zu.com'})
    })
  })
  describe('GET /api/sneakers', () => {
    beforeEach(() => {
      mockAxios.onGet('/api/sneakers').reply(200, [{id: 1}, {id: 2}, {id: 3}])
    })
    it('sets the received sneakers data to the state', async () => {
      await store.dispatch(fetchSneakers())
      const state = store.getState()
      expect(state.allSneakers.sneakers).to.have.lengthOf(3)
    })
  })
  describe('GET /api/sneakers/1', () => {
    beforeEach(() => {
      mockAxios.onGet('/api/sneakers/1').reply(200, {id: 1, brand: 'Puma'})
    })
    it('sets the received sneaker to the state', async () => {
      await store.dispatch(fetchSingleSneaker(1))
      const state = store.getState()
      expect(state.singleSneaker).to.deep.equal({id: 1, brand: 'Puma'})
    })
  })
})
