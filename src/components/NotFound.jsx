import React,{Component} from 'react';
import Header from './Header';

class NotFound extends Component{
	render(){
		return(
				<div>
				<Header txtTitle='Not Found'/>
				<h1>Not Found</h1>
				</div>
			)
	}
}
export default NotFound;