import React,{Component,PropTypes} from 'react';
import { Field } from 'redux-form';
import { FlatButton } from 'material-ui';
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
                <div>
                  <Grid fluid>
                    <Row>
                    <Col xs={6} md={3} >
                    <Field
                      name="user_read"
                      component={Toggle}
                      label="อ่าน"
                      labelPosition="right"
                    />

                    <Field
                      name="user_write"
                      component={Toggle}
                      label="เขียน"
                      labelPosition="right"
                    />
                         </Col>
                    </Row>
                  </Grid>
                </div>
                 <p>จัดการห้องพัก</p>
                <div>
                   <Grid fluid>
                    <Row>
                    <Col xs={6} md={3} >
                    <Field
                      name="room_read"
                      component={Toggle}
                      label="อ่าน"
                      labelPosition="right"
                    />
                    <Field
                      name="room_write"
                      component={Toggle}
                      label="เขียน"
                      labelPosition="right"
                    />
                      </Col>
                      </Row>
                    </Grid>
                </div>
          <FlatButton type='submit' label="Submit" />
        </form>
      </div>
    );
  }
}

export default NewUser;