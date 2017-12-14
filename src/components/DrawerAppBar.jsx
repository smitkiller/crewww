import React,{Component} from 'react'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'

class DrawerAppBar extends Component{
  constructor(props){
    super(props)
    this.state={
      open:false
    }
  }
  handleToggle = () =>this.setState({
    open:!this.state.open
  })
  render(){
    const { header } = this.props
    return(
      <div>
      <RaisedButton
      label="Toggle Drawer"
      onTouchTap={this.handleToggle}/>
      <Drawer width={200}
      openSecondary={true} open={this.state.open}>
      <AppBar title={header}/>
      </Drawer>
      </div>
    )
  }
}
export default DrawerAppBar
