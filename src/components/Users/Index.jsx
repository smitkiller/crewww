import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'
import AddIcon from 'material-ui/svg-icons/image/add-to-photos'
import EditIcon from 'material-ui/svg-icons/image/edit'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import DialogDelete from '../Dialog/DialogDelete'
import _ from 'lodash';

const style = {
  margin: 12,
};

const Users = ({
  users,
  onReloadUsers,
  onRemove
}) => (
  <div>
    <FlatButton
      label="Reload Users"
    />
    <Link to={{ pathname: '/users/new' }}><FlatButton icon={<AddIcon/>} style={style} /></Link>
    <hr />
    <Table>
     <TableHeader>
       <TableRow>
       <TableHeaderColumn>ชื่อ</TableHeaderColumn>
        <TableHeaderColumn>สกุล</TableHeaderColumn>
        <TableHeaderColumn>อีเมล</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
         <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody>
      {
          _.map(users,(user,key)=>(
            <TableRow key={key}>
              <TableRowColumn>{user.firstname}</TableRowColumn>
              <TableRowColumn>{user.lastname}</TableRowColumn>
              <TableRowColumn>{user.email}</TableRowColumn>
              <TableRowColumn>
                <Link to={{ pathname: `/users/${key}` }}><FlatButton label="Show" secondary={true} /></Link>
              </TableRowColumn>
              <TableRowColumn>
                <FlatButton icon={<EditIcon/>} style={style} />
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
