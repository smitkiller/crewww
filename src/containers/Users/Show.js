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
			{!this.props.user?<div>Loading ...</div>
				:
				<ShowUser
					user={this.props.user}
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