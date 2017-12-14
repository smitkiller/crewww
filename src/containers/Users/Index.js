import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadUsers,deleteUser } from '../../actions/user';
import {Users,Header} from '../../components';

class UsersContainer extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    onLoadUsers: PropTypes.func.isRequired,
    onDelete:PropTypes.func
  }

  static need = [
    loadUsers
  ]

  shouldComponentUpdate(nextProps) {
    return this.props.users !== nextProps.users;
  }

  onReloadUsers = () => {
    this.props.onLoadUsers()
  }

  onRemove = (id) => {
    this.props.onDelete(id)
  }

  componentDidMount() {
   // this.onReloadUsers()
  }

  render() {
    return (
      <div><div>
          <Header txtTitle='Users'/>
          <Users />
     
     </div>
      </div>
    )
  }
}

/*
export default connect(
  (state) => ({ users: state.users }),
  { onLoadUsers: loadUsers,onDelete:deleteUser }
)(UsersContainer)
*/

export default UsersContainer;
