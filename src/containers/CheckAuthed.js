import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { firebaseAuth } from '../constants/configAuth'

    
export default function(ComposedComponent) {
  class CheckAuthed extends Component {

       state = {
          authed: false,
          loading: true,
        }
      componentDidMount () {
            this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
              if (!user) {
                  browserHistory.push('/');
              }
            })
      }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }



  //function mapStateToProps(state) {
 //   return {
 //     authed: state.login.authed
  //  };
  //}

  //return connect(mapStateToProps)(CheckAuthed);
  return CheckAuthed;
}