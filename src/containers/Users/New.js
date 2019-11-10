import React,{Component,PropTypes} from 'react';
import {NewUser,Header} from '../../components';
import { reduxForm } from 'redux-form';
import {createUser} from '../../actions';
import { connect } from 'react-redux';

class NewUserContainers extends Component{

	render(){
		const {handleSubmit}=this.props;
		
		return(
			<div>
				<Header txtTitle="New User"/>	
				<NewUser
					handleSubmit={handleSubmit}
				/>		
			</div>
			)
	}
}


NewUserContainers = reduxForm({
    form: 'NewUser',
    initialValues:{
    	admin_page:"0",
    	room_page:"0",
    	user_type:1
    },
    onSubmit:(values,dispatch)=>dispatch(createUser(values))
})(NewUserContainers)


export default NewUserContainers;