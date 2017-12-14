import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';


    
export default function(ComposedComponent) {
  class CheckAuthed extends Component {
    componentWillMount() {
        if(!this.props.authed ){
          browserHistory.push('/');
        }
    }


    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }



  function mapStateToProps(state) {
    return {
      authed: state.login.authed
    };
  }

  return connect(mapStateToProps)(CheckAuthed);
}