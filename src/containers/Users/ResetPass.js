import React,{Component,PropTypes} from 'react';
import {ResetPass,Header} from '../../components';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {resetPass} from '../../actions';
import {getUserById} from '../../reducers/users';

class ResetPassContainer extends Component{

	render(){
		const {handleSubmit}=this.props;
		
		return(
			<div>
				<Header txtTitle="Reset Password"/>	
				<ResetPass
					handleSubmit={handleSubmit}
				/>
			</div>
			)
	}
}

function mapInitialValues(state,ownProps){
   var data=getUserById(state,ownProps.params.id);
	return{
		initialValues:data
	}
}

ResetPassContainer = reduxForm({
    form: 'ResetPass',
    onSubmit:(values,dispatch)=>dispatch(resetPass(values))
})(ResetPassContainer)

ResetPassContainer=connect(mapInitialValues)(ResetPassContainer);
export default ResetPassContainer;