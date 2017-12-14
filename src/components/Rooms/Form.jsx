/*  File Test */
import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
//import { FileUpload } from 'redux-file-upload'
import { FlatButton, TextField } from 'material-ui';
//import ImageUpload from '../ImageUpload'

const renderTextField = props => (
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.meta.touched && props.meta.error}
    {...props.input}/>
)
const RoomsColForm = ({
  fields,
  handleSubmit,touched,error
}) => {

  return (
    <div className="App">
    <form
      onSubmit={handleSubmit}
      className='form'>
      <div>
        <Field
         name="rows"
         label="Rows"
         component={renderTextField} />
      </div>
      <div>
      <Field
       name="col"
       label="Col"
       component={renderTextField} />

      </div>

 
    </form>
    </div>
  )
}
RoomsColForm.propTypes = {
  fields: PropTypes.array,
  rows: PropTypes.object,
  col: PropTypes.object,
  handleSubmit: PropTypes.func
}

export default RoomsColForm;