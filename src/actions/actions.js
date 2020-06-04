import * as types from "./actionTypes";
import axios from 'axios';

export const updateUser = (input) => {
  return {
    type: types.UPDATE_USER,
    payload: input
  }
} 

export const submit = (dispatch, getState) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    password
  } = getState().userReducer;

  axios.post('url', {
    firstName,
    lastName,
    userName,
    email,
    password
  }).then(res => {
    return res.json()
  });
};