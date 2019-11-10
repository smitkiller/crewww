import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
//import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { Link} from 'react-router';
import logo from '../img/logo2.png';
import {logoutUser} from '../actions/login';
//import { firebaseAuth } from '../constants/configAuth';
import { connect } from 'react-redux';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { browserHistory } from 'react-router';
import '../styles/show_txt.css';
import BackIcon from 'material-ui/svg-icons/content/backspace';
import FlatButton from 'material-ui/FlatButton';


class Header extends Component {

  constructor(props){
    super(props)
    this.state={
      open:false
    }
  }

  handleToggle = () =>this.setState({
    open:!this.state.open
  })

  onLogout = () => {
    this.props.onLogClick()
  }

  goBack=()=>{
    browserHistory.goBack();
  }

  render() {
    const { txtTitle } = this.props
    return (
      <div>  
      <header className="header">
          <AppBar
          title={txtTitle}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<img src={logo} alt="Logo"/>}/>
          {/*iconElementRight =*/} {/*<img src='header-logo.png' alt="Logo" />*/}
          <div>
          <FlatButton onClick={this.goBack}  icon={<BackIcon/>} />
          <Drawer
          width={200}
          openSecondary={false}
          open={this.state.open}>

          <AppBar title={txtTitle} onLeftIconButtonTouchTap={this.handleToggle}/>
          <Link className="link_no_line" to={'/'}><MenuItem>Home</MenuItem></Link>
          <Link className="link_no_line" to={'/about'}><MenuItem>About</MenuItem></Link>
         {this.props.authed
          ?<div>
          <Link className="link_no_line" to={'/app'} ><MenuItem>App</MenuItem></Link>
          <Link className="link_no_line" to={'/pages'}><MenuItem>Pages</MenuItem></Link>
          <Link className="link_no_line" to={'/reserve'}><MenuItem>จอง</MenuItem></Link>
          <MenuItem
              primaryText="แจ้ง"
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <Link className="link_no_line" to={'/login'}><MenuItem primaryText="แจ้งออกห้องพัก" /></Link>,
                <MenuItem primaryText="แจ้งย้ายห้องพัก" />,
                <MenuItem primaryText="แจ้งอุปกรณ์ชำรุด"  />,
                <MenuItem primaryText="อื่นๆ"  />
              ]}
          />
          <Link className="link_no_line" to={'/pages'}><MenuItem>คำนวณ</MenuItem></Link>
          <Link className="link_no_line" to={'/pages'}><MenuItem>ติดต่อ</MenuItem></Link>
          <Link className="link_no_line" to={'/users'}><MenuItem primaryText="จัดการผู้ใช้ระบบ" /></Link>
          <Link className="link_no_line" to={'/roomcol'}><MenuItem primaryText="จัดการจำนวนห้องพัก" /></Link>
          <Link className="link_no_line" onClick={this.onLogout}><MenuItem>Logout</MenuItem></Link>
          </div>
        : <Link className="link_no_line" to={'/login'}><MenuItem>Login</MenuItem></Link>}
          </Drawer>
          </div>
      </header>
      </div>
   )    
 }
}

function mapStateToProps(state){
  return{
    authed:state.login.authed
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogClick: () => {
      dispatch(logoutUser())
    }
  };
}


 Header = connect(mapStateToProps,mapDispatchToProps)(Header);


export default Header;
