import * as types from "../actions/actionTypes";

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_USER: {
      const newFirst = action.payload.firstName;
      const newLast = action.payload.lastName;
      const newUserName = action.payload.userName;
      const newEmail = action.payload.email;
      const newPass = action.payload.password;
      const newConfirmPass = action.payload.newPassword;
      return {
        ...state,
        firstName: newFirst,
        lastName: newLast,
        userName: newUserName,
        email: newEmail,
        password: newPass,
        confirmPassword: newConfirmPass
      }
    }
    default:
      return state;
  }
} 

export default userReducer;