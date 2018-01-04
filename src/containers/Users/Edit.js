import React,{Component,PropTypes} from 'react';
import {EditUser,Header} from '../../components';

class EditUserContainers extends Component{
	render(){
		return(
			<div>
			<Header
				txt_title="แก้ไขผู้ใช้"
			/>
			<EditUser/>
			</div>
			)
	}
}

export default EditUserContainers;