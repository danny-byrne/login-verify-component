import * as actions from '../actions';
import { UPDATE_USER, RESET_USER, SUBMIT } from '../actionTypes';


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

