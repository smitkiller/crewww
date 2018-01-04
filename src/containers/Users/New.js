import React,{Component,PropTypes} from 'react';
import {NewUser,Header} from '../../components';
import { reduxForm } from 'redux-form';
import {createUser} from '../../actions';

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
    onSubmit:(values,dispatch)=>dispatch(createUser(values))
})(NewUserContainers)


export default NewUserContainers;