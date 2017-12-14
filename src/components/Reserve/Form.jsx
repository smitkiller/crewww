/* Test */
/*
import React,{Component,Proptypes} from 'react';
import { FlatButton, TextField } from 'material-ui';
import { Field } from 'redux-form';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { reduxForm } from 'redux-form';

const renderTextField = (props) => (
      <div>
		<TextField 
			hintText={props.label} 
			floatingLabelText={props.label}
			errorText={props.meta.touched && props.meta.error}
			{...props.input}/>
      </div>
	)


const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

class ReserveForm extends Component{
   render(){
   		const {handleSubmit} = this.props;
   	return(

   		<form onSubmit={handleSubmit} className='form' >
      <div>
        ประเภทการจอง
      </div>
         <div>
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
               <RadioButton
                 value="0"
                 label="รายวัน"
                 style={styles.radioButton}
               />
                <RadioButton
                 value="1"
                 label="รายเดือน"
                 style={styles.radioButton}
               />
            </RadioButtonGroup>
         </div>
   		<div>
   			<Field name="firstname" label="ชื่อ" component={renderTextField} />
   		</div>
   		<div>
   			<Field name="lastname" label="นามสกุล" component={renderTextField} />
   		</div>
   		<div>
   			<Field name="tel" label="เบอร์โทรศัพท์" component={renderTextField} />
   		</div>
   		<div>
   			<Field name="email" label="email" component={renderTextField} />
   		</div>
   		<div>
   			ประเภทการเข้าพัก
   		</div>
         <div>
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
               <RadioButton
                 value="light"
                 label="Simple"
                 style={styles.radioButton}
               />
                <RadioButton
                 value="light"
                 label="Simple"
                 style={styles.radioButton}
               />
            </RadioButtonGroup>
         </div>
   		</form>	
   		)
   }
}

ReserveForm = reduxForm(
  {
    form: 'ReserveForm',
})(ReserveForm)

export default ReserveForm;
*/