import React,{Component,PropTypes} from 'react';
import {Header,ReserveList} from '../../components';
import { loadReserve } from '../../actions';
import {connect} from 'react-redux';

class ReserveListContainer extends Component{

		 static propTypes = {
		    onLoadReserve: PropTypes.func.isRequired
		  }

		  static need = [
		    loadReserve
		  ]

		  shouldComponentUpdate(nextProps) {
		    return this.props.reserves !== nextProps.reserves;
		  }

		  onReloadReserve = () => {
		    this.props.onLoadReserve()
		  }


		  componentDidMount() {
		    this.onReloadReserve()
		  }


	render(){
		return(
				<div>
					<Header txtTitle="รายการการจองห้องพัก"/>
					<ReserveList
						reserves={this.props.reserves}
					/>
				</div>
			)
	}
}

const mapStateToProps=(state)=>{
	return{
		reserves:state.reserves
	};
}

ReserveListContainer=connect(mapStateToProps,{onLoadReserve:loadReserve})
(ReserveListContainer)

export default ReserveListContainer;