import React, {Component, PropTypes } from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { Dialog,FlatButton, TextField } from 'material-ui';
import EditIcon from 'material-ui/svg-icons/image/edit';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { reduxForm } from 'redux-form';
import { updateRoomscol } from '../../actions';
import _ from 'lodash';


const styles = {
   float       : 'none', 
   width       : '200px',
   marginLeft  : 'auto',
   marginRight : 'auto'
};

const renderSelectField = ({ input,label,children }) => (
    <SelectField
      { ...input }
      floatingLabelText={ label }
      floatingLabelFixed={true}
      value="1">
    </SelectField>
)

const renderTextField = props => (
  <div>
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.meta.touched && props.meta.error}
    {...props.input}/></div>
)


const numValidate = (value) =>(value && isNaN(Number(value))?'กรุณากรอกตัวเลข':undefined)
const required=(value)=>(value?undefined:'Required')

  class EditFormCol extends Component {

      state={
        value:this.props.totalLevel
      } 

   /*   componentWillReceiveProps(){
        this.levelTotal();
      }*/
      componentWillMount(){
        this.levelTotal();
      }


    handleChange = (event, index, value) => this.setState({value});
    levelTotal = () =>(
            this.setState({value:this.props.totalLevel})
        )


        render(){
          const { handleSubmit} = this.props;
          const items = [];
          const itemsInput = [];
            for (var i = 1; i < 100; i++ ) {
                  items.push(<MenuItem value={i} key={i} primaryText={`${i} ชั้น`} />);
            }

            for(var m=0; m <this.state.value;m++){
                 itemsInput.push(<Field key={m} name={m.toString()} label={`ชั้นที่ ${m+1}`} 
                 component={renderTextField} validate={[required,numValidate]} />)
            }

         return(
                <div style={styles}>
                  <form onSubmit={handleSubmit((values,dispatch)=>dispatch(updateRoomscol(values, this.state.value)))}>     
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

                      <FlatButton type="submit" label="Submit" />
                   </form>

                </div>
         )
      }
}



function mapInitialValues(state,ownProps){
  var data=[];
  var values=[];
  //values.push(ownProps.totalLevel.toString())
  //console.log('dddddddddddddddddd',ownProps)
    _.map(state.roomscol,(val,key)=>
       val.levelRooms.map((level,inx)=>
        values[inx]=level
        )

      )

//console.log('mmmmmmmmmmmmmmm',values)
  return{
    initialValues:values
  }
}

EditFormCol = reduxForm(
  {
    form: 'EditFormCol',
    //enableReinitialize : true,  // สำคัญ ทำให้ ownProps found
    //onSubmit:(values,dispatch)=> console.log('valllllllllllll',values)
})(EditFormCol)
EditFormCol = connect(mapInitialValues)(EditFormCol)

EditFormCol.propsTypes={
  handleSubmit:PropTypes.func
}

export default EditFormCol;
