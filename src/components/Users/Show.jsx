import React,{Component,PropTypes} from 'react';

class ShowUser extends Component{
	render(){
		const {user}=this.props;
		return(
			<div>
			<div>{user.email}</div>
			<div>{user.firstname}</div>
			<div>{user.lastname}</div>
			{
				user.role.room_read
			?<div>true</div>
			:<div>false</div>
			}
			</div>
			)
	}
}

export default ShowUser;