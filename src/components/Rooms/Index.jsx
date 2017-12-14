import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import AddIcon from 'material-ui/svg-icons/image/add-to-photos';
import { FlatButton, TextField } from 'material-ui';
import EditIcon from 'material-ui/svg-icons/image/edit';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';

const styles = {
  position_link:{margin: '2%'},
  position_paper:{
         margin: '0 auto',
         width:'80%',
         marginTop:'5%'
  },
  content:{
    marginLeft:'15%'
  },
  stext:{
    textAlign:'center',
    color:'red',
    paddingBottom:'5%'
  },
  colLeft:{
    float:'left'
  },
  colRight:{
    float:'right',
    marginRight:'20%'
  }
};


const state = {
    showCheckboxes: false
  };

const Roomscol = ({roomscol}) => (
<div>
 <Paper style={styles.position_paper}> 
 {!roomscol
     ?<div>
     <Link to={{ pathname: '/roomcol/new' }}>
     <FlatButton icon={<AddIcon/>} style={styles.position_link} /></Link>
     <div style={styles.stext}>ไม่มีข้อมูล</div>
     </div>
     :null
  }
      {
        _.map(roomscol,(value,key)=>(                 
          <div style={styles.content}>
            <Subheader> 
                <span>จำนวนห้องพัก</span>
                <span style={styles.colRight}>{value.totalRooms}</span>
             </Subheader>

              <Subheader>
              <span> ชั้นทั้งหมด </span>
              <span style={styles.colRight}> {value.totalLevel} </span>
              </Subheader>
              <Subheader>ชั้นที่ 1</Subheader>
              <Link to={{ pathname: `/roomcol/edit/${key}` }}>
              <FlatButton icon={<EditIcon/>} style={styles.position_link} /></Link>
          </div>             
        ))
      }
    </Paper>
  </div>
)


export default Roomscol;