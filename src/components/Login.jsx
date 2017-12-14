import React, { PropTypes,Component } from 'react'
import { FlatButton, TextField } from 'material-ui'
import { Field } from 'redux-form'

const styleLogin = {
   float       : 'none', 
   width       : '200px',
   marginLeft  : 'auto',
   marginRight : 'auto',
   color       : 'red'
};

const renderTextField = props => (
  <div>
    <TextField
      hintText={props.label}
      floatingLabelText={props.label}
      type={props.type}
      errorText={props.meta.touched && props.meta.error}
      {...props.input} />
  </div>
)



class Login extends Component{
  
  state={
    errorLogin:''
  }

 errorText=()=>{
    this.setState({
      errorLogin:this.props.login.statusText
    })
 }

  render(){
    const {login,handleSubmit}=this.props

    return(
        <div style={styleLogin}>{this.state.errorLogin}

    <form
      onSubmit={handleSubmit}
      className='form'>
      <div>
        <Field
         name="email"
         type="text"
         label="E-mail"
         component={renderTextField} />
      </div>
      <div>
      <Field
       name="password"
       type="password"
       label="Password"
       component={renderTextField} />

      </div>
      <FlatButton type='submit' label="Submit" onClick={this.errorText}/>
    </form>
    </div>
    )
  }
}
Login.propTypes = {
  fields: PropTypes.array,
  email: PropTypes.object,
  password: PropTypes.object,
  handleSubmit: PropTypes.func
}

export default Login;

