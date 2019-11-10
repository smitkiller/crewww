import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import AddIcon from 'material-ui/svg-icons/image/add-to-photos';
import { FlatButton } from 'material-ui';
import EditIcon from 'material-ui/svg-icons/image/edit';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import { Grid, Row, Col } from 'react-flexbox-grid'; 


const state = {
    showCheckboxes: false
  };

const Roomscol = ({roomscol}) => (
<div>
 <Paper className="position_paper" > 
 {!roomscol
     ?<div>
     <Link to={{ pathname: '/roomcol/new' }}>
     <FlatButton icon={<AddIcon/>} /></Link>
     <div className="stext" >ไม่มีข้อมูล</div>
     </div>
     :null 
  }
      {
        _.map(roomscol,(value,key)=>(  

          <div key={key} className="content_roomcol">
            <Subheader> 
                <span>จำนวนห้องพัก</span>
                <span className="colRight">{value.totalRooms} ห้อง</span>
             </Subheader>

              <Subheader>
              <span> ชั้นทั้งหมด </span>
              <span className="colRight"> {value.totalLevel} ชั้น</span>
              </Subheader>
            {_.map(value.levelRooms,(val,key)=>
              <Subheader key={key}> 
                <span>ชั้นที่ {key+1}</span>
                <span className="colRight">จำนวน {val} ห้อง</span>
              </Subheader>                  
             )}

              <Link to={{ pathname: `/roomcol/edit/${key}` }}>
              <FlatButton icon={<EditIcon/>} /></Link>     
          </div>             
        ))
      }
    </Paper>
  </div>
)


export default Roomscol;