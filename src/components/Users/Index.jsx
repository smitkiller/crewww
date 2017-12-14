import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'
import AddIcon from 'material-ui/svg-icons/image/add-to-photos'
import EditIcon from 'material-ui/svg-icons/image/edit'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import DialogDelete from '../Dialog/DialogDelete'


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
    <FlatButton icon={<AddIcon/>} style={style} />
    <hr />
    <Table>
     <TableHeader>
       <TableRow>
       <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
         <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody>

            <TableRow >
              <TableRowColumn></TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn>
                <FlatButton label="Show" secondary={true} />
              </TableRowColumn>
              <TableRowColumn>
                <FlatButton icon={<EditIcon/>} style={style} />
              </TableRowColumn>
              <TableRowColumn>


              </TableRowColumn>
            </TableRow>

      </TableBody>
    </Table>
  </div>
)

Users.propTypes = {
  users: PropTypes.array.isRequired,
  onReloadUsers: PropTypes.func.isRequired,
  onRemove:PropTypes.func
}

export default Users;
