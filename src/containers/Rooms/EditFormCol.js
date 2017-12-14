import React, { Component ,PropTypes } from 'react';
import { connect } from 'react-redux';
import {EditFormCol,Header} from '../../components';
import _ from 'lodash';


class EditFormColContainer extends Component {
  render() {
    return (
      <div>
      <Header txtTitle="แก้ไขจำนวนห้องพัก"/>
       {
       	!this.props.levelRooms || !this.props.totalLevel || !this.props.totalRooms
       	? <div><h1>Loading...</h1></div>
       	:
       	<EditFormCol
           levelRooms={this.props.levelRooms}
           totalLevel={this.props.totalLevel}
           totalRooms={this.props.totalRooms}
        />
    	}
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
	var all;
	_.map(state.roomscol,(data)=>all=data)
	if(typeof all!=='undefined'){
		return{
			levelRooms:all.levelRooms,
			totalLevel:all.totalLevel,
			totalRooms:all.totalRooms
		}
	}else{
		return state
	}
}
EditFormColContainer = connect(mapStateToProps)(EditFormColContainer)

export default EditFormColContainer;