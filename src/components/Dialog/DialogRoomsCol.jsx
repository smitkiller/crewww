/* File TEST */
import React,{ Component } from 'react';
import {Dialog,FlatButton} from 'material-ui';
import AddIcon from 'material-ui/svg-icons/image/add-to-photos';
import RoomsColForm from '../Rooms/Form';



class DialogRoomsCol extends Component{
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
    const { handleSubmit} = this.props
    const actions= [
      <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.handleClose}/>,

      <FlatButton
      type="submit"
      label="Submit"
      primary={true}
      onTouchTap={handleSubmit}
      />
    ]

    return(
      <div>
      <FlatButton icon={<AddIcon/>} onTouchTap={this.handleOpen} />
      <Dialog
      title="Delete"
      actions={actions}
      modal={true}
      open={this.state.open}>
      <RoomsColForm 
        handleSubmit={handleSubmit}
      />
      </Dialog>
      </div>
    )
  }
}

export default DialogRoomsCol;