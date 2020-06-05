import * as actions from '../actions';
import { UPDATE_USER, RESET_USER, SUBMIT } from '../actionTypes';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it("should create an action to add a user", () => {
    const user = 'user';
    const expected = {
      type: UPDATE_USER,
      payload: user
    }
    expect(actions.updateUser(user)).toEqual(expected)
  })
  it("should create an action to reset the user information",  () => {
    const event = 'event';
    const expected = {
      type: RESET_USER,
      payload: event  
    }
    expect(actions.resetUser(event)).toEqual(expected)
  })
})

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restoter()
  })

  xit('creates an async post request in submit', () => {
    fetchMock.getOnce('http://localhost:5555/createuser', {
      body: {
        firstName: 'Joe',
        lastName: 'schmo',
        userName: 'JS',
        password: 'pass',
        confirmPassword: 'pass'
      },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: SUBMIT,
        body: {
          firstName: 'Joe',
          lastName: 'schmo',
          userName: 'JS',
          password: 'pass',
          confirmPassword: 'pass'
        }
      }
    ]
    const store = mockStore({ firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "" })

    return store.dispatch(actions.SUBMIT()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})