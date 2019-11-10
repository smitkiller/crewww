import React,{Component,PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { FlatButton } from 'material-ui';
import EditIcon from 'material-ui/svg-icons/image/edit';
import { Link } from 'react-router';

const role=["ไม่มีสิทธิ์","ดูได้อย่งเดียว","ดู / แก้ไข / ลบ"];
class ShowUser extends Component{
	render(){
		const {user,id}=this.props;
		return(
		<Paper className="position_paper"> 
			<div className="content_roomcol">
     {/*   <div>
             <Subheader className="colCenter">ชื่อผู้ใช้ และ รหัสผ่าน</Subheader>
              <Subheader> 
                <span className="underline">E-mail</span>
          			<div className="colRight">{user.email}</div>
      		    </Subheader> 
              <Subheader> 
                <span className="underline">Password</span>
                <div className="colRight">********</div>
              </Subheader>
              <div className="colRight">
              <Link to={{ pathname: `/users/edit/${id}` }}>
                    <FlatButton label="แก้ไข" icon={<EditIcon/>} />
              </Link>
              </div>
              <hr className="hr_style_c"/>
        </div>*/}
        <div>
            <Subheader className="colCenter">ข้อมูลส่วนตัว</Subheader>
            <Subheader>
              <span className="underline">ขือ่</span>
              <div className="colRight">{user.firstname}</div>
            </Subheader>
            <Subheader>
              <span className="underline">นามสกุล</span>
              <div className="colRight">{user.lastname}</div>
            </Subheader>
            <Subheader>
              <span className="underline">เบอร์โทร</span>
              <div className="colRight">{user.tel}</div>
            </Subheader>
            <Subheader className="colCenter">สิทธิ์</Subheader>
            <Subheader>
              <span className="underline">จัดการข้อมูลผู้ใช้ระบบ (Admin)</span>
              <div className="colRight">{role[user.role.admin_page]}</div>
            </Subheader>
            <Subheader>
              <span className="underline">จัดการห้องพัก</span>
              <div className="colRight">{role[user.role.room_page]}</div>
            </Subheader>
            <div className="bottom_mar">
              <Link className="colRight" to={{ pathname: `/users/edit/${id}` }}>
                    <FlatButton label="แก้ไข" icon={<EditIcon/>} /></Link>
            </div>
            {/*<hr className="hr_style_c"/>*/}
        </div>
			</div>
		</Paper>
			)
	}
}


export default ShowUser;