import React,{ Component,PropTypes} from 'react';
import {Dialog,FlatButton} from 'material-ui';
import ActionTouch from 'material-ui/svg-icons/action/touch-app'
import {StepForm} from '../../components';
import Clear from 'material-ui/svg-icons/content/clear'
import FloatingActionButton from 'material-ui/FloatingActionButton';

class DialogReserve extends Component{
  state={
    open:false
  }
  handleOpen= () =>{
    this.setState({
      open:true
    })
  }
  handleClose= () =>{
    this.setState({
      open:false
    })
  }

  render(){
    const {id}=this.props

    const actions= [
      <FlatButton
      icon={<Clear/>}
      onTouchTap={this.handleClose}/>,
    ]

    return(
      <div>
      <FlatButton title="จอง" icon={<ActionTouch/>} onTouchTap={this.handleOpen} />
      <Dialog
      title="จองห้องพัก"
      actions={actions}
      modal={true}
      open={this.state.open}
      autoScrollBodyContent={true}>

        <StepForm
            id={this.props.id}
            handleClose={this.handleClose}
        />
      </Dialog>
      </div>
    )
  }
}

export default DialogReserve;