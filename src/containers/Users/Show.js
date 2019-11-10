import React,{Component,PropTypes} from 'react';
import {ShowUser,Header} from '../../components';
import { getUserById } from '../../reducers/users';
import { connect } from 'react-redux';

class ShowUserContainers extends Component{
	render(){
		return(
			<div>
			<Header
				txtTitle="แสดงรายละเอียด"
			/>
			{!this.props.user?<h1>Loading...</h1>
				:
				<ShowUser
					user={this.props.user}
					id={this.props.params.id}
				/>
			}
			</div>
			)
	}
}
function mapStateToProps(state,ownProps){
	return{
		user:getUserById(state, ownProps.params.id)
	}
}
ShowUserContainers=connect(mapStateToProps)(ShowUserContainers)
export default ShowUserContainers;