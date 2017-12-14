import React,{Component} from 'react';
import { Router,Route,IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import Routes from './route';



class RoutesIndex extends Component {
  render() {
  const {history} = this.props
    return (
      <div>
      {this.props.authed===undefined?<div><h1>Loading</h1></div>
        : <Routes
          history={history}
          authed={this.props.authed}
         />
       }
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    authed:state.login.authed
  };
}





 RoutesIndex = connect(mapStateToProps)(RoutesIndex);

export default RoutesIndex;