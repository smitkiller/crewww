import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadRoomscol } from '../../actions';
import {Roomscol,Header} from '../../components';


//const FIELDS = ['rows', 'col'];

class RoomscolContainer extends Component {
  static propTypes = {
    onLoadRoomscol: PropTypes.func.isRequired
  }

  static need = [
    loadRoomscol
  ]

  shouldComponentUpdate(nextProps) {
    return this.props.roomscol !== nextProps.roomscol;
  }

  onReloadRoomscol = () => {
    this.props.onLoadRoomscol()
  }


  componentDidMount(){
    this.onReloadRoomscol()
  }

  render() {
    return (
      <div><div>
          <Header txtTitle='จัดการจำนวนห้อง'/>
          <Roomscol 
              roomscol={this.props.roomscol}
          />
     
     </div>
      </div>
    )
  }
}

RoomscolContainer = connect(
  (state) => ({ roomscol: state.roomscol }),
  { onLoadRoomscol: loadRoomscol }
)(RoomscolContainer)


export default RoomscolContainer;
