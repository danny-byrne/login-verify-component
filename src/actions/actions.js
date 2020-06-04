import * as types from "./actionTypes";
import axios from 'axios';

export const updateUser = (input) => {
  return {
    type: types.UPDATE_USER,
    payload: input
  }
} 

export const submit = () => (dispatch, getState) => {
  console.log('registering')
  const {
    firstName,
    lastName,
    userName,
    email,
    password
  } = getState().userReducer;

  const user = {
    firstName,
    lastName,
    userName,
    email,
    password
  };

  console.log('user is:', user)

  axios.post('http://localhost:5555/createuser', user)
    .then(res => {
      return res.json()
    })
    .catch(err => console.log('Error posting to users:', err))
};