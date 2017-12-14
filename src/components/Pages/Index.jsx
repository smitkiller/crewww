import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router'
//import Page from './Page'

import FlatButton from 'material-ui/FlatButton'
//import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'
import AddIcon from 'material-ui/svg-icons/image/add-to-photos'
import EditIcon from 'material-ui/svg-icons/image/edit'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import DialogDelete from '../Dialog/DialogDelete';
import _ from 'lodash';

const style = {
  margin: 12,
};
const state = {
    showCheckboxes: false
  };
const Pages = ({pages,onReloadPages,onRemove
}) => (
  <div>
    <FlatButton
      onClick={() => onReloadPages()}
      label="Reload Pages"
    />
    <Link to={{ pathname: '/pages/new' }}><FlatButton icon={<AddIcon/>} style={style} /></Link>
    <hr />
    <Table>
     <TableHeader
      displaySelectAll={state.showCheckboxes}
      adjustForCheckbox={state.showCheckboxes}
     >
       <TableRow>
       <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
         <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={state.showCheckboxes}
      >
        {
          _.map(pages,(page,key) => (
            <TableRow key={key}>
              <TableRowColumn>{key}</TableRowColumn>
              <TableRowColumn>{page.title}</TableRowColumn>
              <TableRowColumn>
                <Link to={{ pathname: `/pages/${key}` }}><FlatButton label="Show" secondary={true} /></Link>
              </TableRowColumn>
              <TableRowColumn>
                <Link to={{ pathname: `/pages/edit/${key}` }}><FlatButton icon={<EditIcon/>} style={style} /></Link>
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

Pages.propTypes = {
  onReloadPages: PropTypes.func.isRequired,
  onRemove:PropTypes.func
}

export default Pages;
