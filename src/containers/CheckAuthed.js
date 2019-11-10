import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { firebaseAuth } from '../constants/configAuth';
import {Header} from '../components';

export default function(ComposedComponent) {
  class CheckAuthed extends Component {
     
      componentDidMount () {
            this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
              if (!user) {
                  browserHistory.push('/');
              }
            })  
      }


    render() {
     
      if(this.props.admin_page==="0" 
        && this.props.location.pathname==="/users"
        && this.props.admin_page!=undefined
      ){
        return(
          <div><Header txtTitle='คุณไม่มีสิทธิ์'/></div>
          );
      }else if(this.props.admin_page!="2" 
      && this.props.location.pathname==="/users/new"
      && this.props.admin_page!=undefined
      ){
        return(
          <div><Header txtTitle='คุณไม่มีสิทธิ์'/></div>
        );
      }else{
        return (
        <ComposedComponent {...this.props} />
      );
      }
 
    }
  }



function mapStateToProps(state){
 return{
    admin_page:state.login.admin_page
 }
}

  return connect(mapStateToProps)(CheckAuthed);
  //return CheckAuthed;
}