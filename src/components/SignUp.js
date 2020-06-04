import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import useInputChange from '../hooks/useInputChange';
import updateUser from '../actions/actions';


const mapStateToProps = store => ({
  
})

const mapDispatchToProps = dispatch => ({

})


const SignUp = props => {
  //pull in from store and assign useState
  const { value: firstName, bind: setFirstName } = useInputChange(props.firstName);
  const { value: lastName, bind: setLastName } = useInputChange(props.lastName);
  const { value: userName, bind: setUserName } = useInputChange(props.userName);
  const { value: email, bind: setEmail } = useInputChange(props.email);
  const { value: password, bind: setPassword } = useInputChange(props.password);
  const { value: confirmPassword, bind: setConfirmPassword } = useInputChange(props.confirmPassword);
    // firstname
    // lastname
    // username
    // email
    // password
    // confirm password
  return (
    <div>Signup For Our Service
      <form className = "form">
        <input 
          className = "input"
          type="text"
          placeholder = "Enter First Name"
          name = "firstName"
          {...setFirstName}
        />
        <input 
          className="input"
          type="text"
          placeholder = "Enter Last Name"
          name = "lastName"
          {...setLastName}
        />
        <input 
          className="input"
          type="text"
          placeholder = "Enter Username"
          name = "userName"
          {...setUserName}
        />
        <input 
          className="input"
          type="text"
          placeholder = "Enter Email"
          name = "email"
          {...setEmail}
        />
        <input 
          className="input"
          type="text"
          placeholder = "Enter Password"
          name = "password"
          {...setPassword}
        />
        <input 
          className="input"
          type="text"
          placeholder = "Confirm Password"
          name = "confirmPassword"
          {...setConfirmPassword}
        />
        <NavLink
          className="submitButton"
          to="/verify"
          onClick={() => 
            props.updateUser(
              firstName,
              lastName,
              userName,
              email,
              password,
              confirmPassword
            )
          }
        >
          Register
        </NavLink>
      </form>
    </div>
  )
}




export default connect(mapStateToProps, mapDispatchToProps)(SignUp);