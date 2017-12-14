import React, {Component,PropTypes} from 'react';
import {SelectForm,Header} from '../../components';
import { reduxForm } from 'redux-form'
import { addRomms } from '../../actions';



class NewRoomsContainer extends Component{

	render(){
		const {handleSubmit} = this.props;
		return(
			<div>
				<Header />
				<SelectForm  
					handleSubmit={handleSubmit}
				/>
				</div>
			)
	}
}

NewRoomsContainer = reduxForm({
    form: 'rooms',
    onSubmit:(values,dispatch)=> dispatch(addRomms(values))
}
)(NewRoomsContainer)

export default NewRoomsContainer;