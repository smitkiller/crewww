import React,{Component} from 'react';
import { Router,Route,IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import Routes from './route';



class RoutesIndex extends Component {
  render() {
  const {history} = this.props
    return (
      <div>
        <Routes
          history={history}
         />
       
      </div>
    )
  }
}

//function mapStateToProps(state){
//  return{
//    authed:state.login.authed
//  };
//}





 //RoutesIndex = connect(mapStateToProps)(RoutesIndex);

export default RoutesIndex;