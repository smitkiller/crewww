import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {Header,Reserve} from '../../components';
import {loadRooms} from '../../actions';

class ReserveContainer extends Component {
   
  static propTypes = {
    	onLoadRooms:PropTypes.func.isRequired
    }

	shouldComponentUpdate(nextProps){
		return this.props.rooms !== nextProps.rooms;
	}

	onReloadRooms = () =>{
    	this.props.onLoadRooms();
    }

	componentWillMount(){
		this.onReloadRooms();
	}

	render(){
		return(
			<div>
				<Header txtTitle="จองห้องพัก"/>
			{!this.props.rooms || !this.props.roomscol 
				?<div><h1>Loading...</h1></div>
				:<Reserve
				  rooms={this.props.rooms}
				  roomscol={this.props.roomscol}/>
				}
			</div>
			)

	}
}
function mapStateToProps(state){
	return{
		rooms:state.rooms,
		roomscol:state.roomscol
	};
}
	ReserveContainer = connect(
		mapStateToProps,
		{onLoadRooms:loadRooms}

	)(ReserveContainer)

	export default ReserveContainer;
