import React,{ Component } from 'react'
import {Dialog,FlatButton} from 'material-ui'
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'

class DialogDelete extends Component{
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
    const { id,onRemove} = this.props
    const actions= [
      <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.handleClose}/>,

      <FlatButton
      label="Submit"
      primary={true}
      onClick={this.handleClose}
      onTouchTap={() => onRemove(id)}/>
    ]

    return(
      <div>
      <FlatButton icon={<DeleteIcon/>} onTouchTap={this.handleOpen} />
      <Dialog
      title="Delete"
      actions={actions}
      modal={true}
      open={this.state.open}>
      ยืนยันการลบ
      </Dialog>
      </div>
    )
  }
}

export default DialogDelete;
