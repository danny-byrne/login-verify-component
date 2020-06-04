import * as types from "./actionTypes";

export const updateuser = (input) => {
  return {
    type: types.UPDATE_USER,
    payload: input
  }
}

export const submit = () => {
  return '';
}