import React, {Component,PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Field } from 'redux-form';
import { FlatButton, TextField } from 'material-ui';




const renderTextField = props => (
  <div>
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.meta.touched && props.meta.error}
    {...props.input}/></div>
)

const numValidate = (value) =>(value && isNaN(Number(value))?'กรุณากรอกตัวเลข':undefined)
const required=(value)=>(value?undefined:'Required')


const styles = {
   float       : 'none', 
   width       : '200px',
   marginLeft  : 'auto',
   marginRight : 'auto'
};

class SelectForm extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const {handleSubmit}= this.props;
     const items = [];
     const itemsInput = [];
      for (var i = 1; i < 100; i++ ) {
            items.push(<MenuItem value={i} key={i} primaryText={`${i} ชั้น`} />);
      }
      for(var m=0; m <this.state.value;m++){
           itemsInput.push( <div key={m}>
           <Field name={m.toString()} label={`ชั้นที่ ${m+1}`} component={renderTextField} validate={[required,numValidate]}/>
           </div>)
      }

    return (
      <div style={styles}>
      <form onSubmit={handleSubmit}>
        <SelectField
          floatingLabelText="จำนวนชั้น"
          value={this.state.value}
          onChange={this.handleChange}
        >
          {
            items
          }
        </SelectField>
     
            {
               itemsInput
            }

            <FlatButton type='submit' label="Submit" />
         </form>

      </div>
    );
  }
}



SelectForm.propTypes={
  handleSubmit:PropTypes.func
}

export default SelectForm;