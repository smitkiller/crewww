import React, { Component } from 'react'
import { loginUser } from '../actions/login'
import Login from '../components/Login'
import Header from '../components/Header'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'


const FIELDS = ['email', 'password']

class LoginContainer extends Component{
  
  render () {
    const { handleSubmit } = this.props

    return (
      <div>
      <Header txtTitle="Login"/>
       <Login
       login={this.props.login}
       handleSubmit={handleSubmit}/>
       </div>
    );
  }
}
LoginContainer = reduxForm({
    form: 'login',
    fields: FIELDS,
    validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required' }, {}),
    onSubmit:(values,dispatch)=> dispatch(loginUser(values))
}
)(LoginContainer)
LoginContainer = connect(
  (state) => ({ login: state.login })
)(LoginContainer)

export default LoginContainer;
