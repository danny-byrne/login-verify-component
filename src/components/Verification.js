import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { submit } from '../actions/actions';


const mapStateToProps = store => ({
  firstName: store.userReducer.firstName,
  lastName: store.userReducer.lastName,
  userName: store.userReducer.userName,
  email: store.userReducer.email,
  password: store.userReducer.password
})

const mapDispatchToProps = dispatch => ({
  submit: () => {
    dispatch(submit())
  }
})

const Verification = (props) => {
  const { submit,
          firstName,
          lastName,
          userName,
          email } = props;
  return (
    <div className="verify">
      <h1>Please make sure your information is correct</h1>
      <p>First: {firstName}</p>
      <p>Last: {lastName}</p>
      <p>Username: {userName}</p>
      <p>Email: {email}</p>
      <NavLink className="button" onClick={submit} to="/confirm">
        Register!
      </NavLink>
      <NavLink className="button" to="/">
        Make a change
      </NavLink>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Verification)