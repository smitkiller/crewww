import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import AddIcon from 'material-ui/svg-icons/image/add-to-photos';
import EditIcon from 'material-ui/svg-icons/image/edit';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import {DialogDelete} from '../../components';
import _ from 'lodash';
import { connect } from 'react-redux';
import Restore from 'material-ui/svg-icons/action/restore';

const Users = ({
  users,
  onReloadUsers,
  onRemove
}) => (
  <div>
      <div className="btn_new">
      <FlatButton
        label="Reload Users"
      />
        <Link to={{ pathname: '/users/new' }}><FlatButton  icon={<AddIcon/>} /></Link>
      </div>
    <hr />
    <Table>
     <TableHeader>
       <TableRow>
       <TableHeaderColumn>ชื่อ</TableHeaderColumn>
        <TableHeaderColumn>สกุล</TableHeaderColumn>
        <TableHeaderColumn>อีเมล</TableHeaderColumn>
        <TableHeaderColumn>reset password</TableHeaderColumn>
         <TableHeaderColumn>delete</TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody>
      {
          _.map(users,(user,key)=>(
            <TableRow key={key}>
              <TableRowColumn>{user.firstname}</TableRowColumn>
              <TableRowColumn>{user.lastname}</TableRowColumn>
              <TableRowColumn>{user.email}
                <Link to={{ pathname: `/users/${key}` }}><FlatButton label="Show" secondary={true} /></Link>
              </TableRowColumn>
              <TableRowColumn>
                 <Link to={{ pathname: `/users/reset/${key}` }}>
                    <FlatButton icon={<Restore/>}/>
                 </Link>
              </TableRowColumn>
              <TableRowColumn>
                <DialogDelete
                  id={key}
                  onRemove={onRemove}
                />
              </TableRowColumn>
            </TableRow>
            ))
      }
      </TableBody>
    </Table>
  </div>

)

Users.propTypes = {
  onReloadUsers: PropTypes.func,
  onRemove:PropTypes.func
}


export default Users;
