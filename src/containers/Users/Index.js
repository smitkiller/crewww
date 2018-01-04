import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadUsers,deleteUser } from '../../actions';
import {Users,Header} from '../../components';

class UsersContainer extends Component {
  static propTypes = {
    onLoadUsers: PropTypes.func,
    onDelete:PropTypes.func
  }



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
    this.onReloadUsers()
  }

  render() {
    return (
      <div>
          <Header txtTitle='Users'/>
          {
            !this.props.users?<div>Loading ...</div>
          :
          <Users
              users={this.props.users}
           />
          }
     </div>
    )
  }
}


UsersContainer=connect(
  (state) => ({ users: state.users }),
  { onLoadUsers: loadUsers,onDelete:deleteUser }
)(UsersContainer)


export default UsersContainer;
