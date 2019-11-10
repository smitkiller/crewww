import React,{Component,PropTypes} from 'react';
import { Field } from 'redux-form';
import { FlatButton,RadioButton } from 'material-ui';
import {TextField} from 'redux-form-material-ui';



class ResetPass extends Component{

 required = value => (value == null ?'required' : undefined);
 email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined);



  render() {
    const {handleSubmit} = this.props;

    return (
      <form className="style_form" onSubmit={handleSubmit} >
          <Field 
            name="email" 
            component={TextField}
            hintText="E-mail"
            floatingLabelText="E-mail"
            validate={[this.required,this.email]}
           />
          <FlatButton type='submit' label="Submit" />
        </form>
    );
  }
}

export default ResetPass;