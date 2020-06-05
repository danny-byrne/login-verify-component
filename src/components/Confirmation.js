import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetUser } from '../actions/actions';


const mapStateToProps = store => ({
  firstName: store.userReducer.firstName,
  lastName:  store.userReducer.lastName,
  userName:  store.userReducer.userName,
  email:  store.userReducer.email,
  password:  store.userReducer.password,
  confirmPassword:  store.userReducer.confirmPassword
})

const mapDispatchToProps = dispatch => ({
  resetUser: () => {
    dispatch(resetUser())
  }
})

const Confirmation = (props) => {
  return (
    <div className="container">
      <h1 className="confirmation">CONFIRMED!</h1>
      <NavLink
          className="button"
          to="/"
          onClick={() => 
            props.resetUser()
          }
        >
          Back to start</NavLink>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);