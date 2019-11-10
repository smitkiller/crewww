import React,{Component,PropTypes} from 'react';
import { Field } from 'redux-form';
import { FlatButton,RadioButton } from 'material-ui';
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle,
} from 'redux-form-material-ui';
import { Grid, Row, Col } from 'react-flexbox-grid';


class NewUser extends Component{

 required = value => (value == null ?'required' : undefined);
 email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined);
 numValidate = (value) =>(value && isNaN(Number(value))?'กรุณากรอกตัวเลข':undefined)



  render() {
    const {handleSubmit} = this.props;

    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
      <form onSubmit={handleSubmit} >
                <div>
                    <Field 
                      name="email" 
                      component={TextField}
                      hintText="E-mail"
                      floatingLabelText="E-mail"
                      validate={this.required}
                       />
                </div>
                <div>
                    <Field 
                      name="password" 
                      component={TextField}
                      type="password"
                      hintText="Password"
                      floatingLabelText="Password"
                      validate={this.required}
                       />
                </div>
                <div>
                    <Field 
                      name="firstname" 
                      component={TextField}
                      hintText="ชื่อ"
                      floatingLabelText="ชื่อ"
                      validate={this.required}
                       />
                </div>
                <div>
                    <Field 
                      name="lastname" 
                      component={TextField}
                      hintText="นามสกุล"
                      floatingLabelText="นามสกุล"
                      validate={this.required}
                       />
                </div>
               
                 <div>
                    <Field 
                      name="tel" 
                      component={TextField}
                      hintText="เบอร์โทร"
                      floatingLabelText="เบอร์โทร"
                      validate={[this.required,this.numValidate]}
                       />
                </div>
                <p>จัดการข้อมูลผู้ใช้ระบบ (Admin)</p>
                 <Grid fluid>
                  <Row>
                    <Col xs={6} md={6} >
                      <Field name="admin_page" component={RadioButtonGroup}>
                        <RadioButton value="0" label="ไม่มีสิทธิ์"  />
                        <RadioButton value="1" label="ดูได้อย่างเดียว" />
                        <RadioButton value="2" label="ดู/แก้ไข/ลบ ได้" />
                      </Field>
                      </Col>
                    </Row>
                  </Grid>
                
                 <p>จัดการห้องพัก</p>
                <Grid fluid>
                  <Row>
                    <Col xs={6} md={6} >
                      <Field name="room_page" component={RadioButtonGroup}>
                        <RadioButton value="0" label="ไม่มีสิทธิ์" />
                        <RadioButton value="1" label="ดูได้อย่างเดียว" />
                        <RadioButton value="2" label="ดู/แก้ไข/ลบ ได้" />
                      </Field>
                      </Col>
                    </Row>
                  </Grid>
          <FlatButton type='submit' label="Submit" />
        </form>
      </div>
    );
  }
}

export default NewUser;