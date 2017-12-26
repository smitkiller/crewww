import React,{Component,PropTypes} from 'react';
import {Header,ReserveList} from '../../components';
import { loadReserve,deleteReserve } from '../../actions';
import {connect} from 'react-redux';

class ReserveListContainer extends Component{

		 static propTypes = {
		    onLoadReserve: PropTypes.func.isRequired,
		    onRemove:PropTypes.func
		  }

		 // static need = [
		 //   loadReserve
		 // ]

		  shouldComponentUpdate(nextProps) {
		    return this.props.reserves !== nextProps.reserves;
		  }

		  onReloadReserve = (id) => {
		    this.props.onLoadReserve(id);
		  }

		  onRemove = (id,id_room) => {
		    this.props.onDelete(id,id_room)
		  }

		  componentDidMount() {
		    this.onReloadReserve(this.props.params.id);
		  }


	render(){
		return(
				<div>
					<Header txtTitle="รายการการจองห้องพัก"/>
					<ReserveList
						reserves={this.props.reserves}
						id={this.props.params.id}
						onRemove={this.onRemove} 
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

ReserveListContainer=connect(mapStateToProps,
	{onLoadReserve:loadReserve,onDelete:deleteReserve})
(ReserveListContainer)

export default ReserveListContainer;