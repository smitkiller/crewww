import React,{Component,PropTypes} from'react';
import Paper from 'material-ui/Paper';
import _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAccount from 'material-ui/svg-icons/action/account-box';
import { Link} from 'react-router';
import Slider from 'material-ui/Slider';
import Divider from 'material-ui/Divider';

const styles = {
	mid:{
		   float       : 'none', 
		   width 	   : '100%',
		   marginLeft  : 'auto',
		   marginRight : 'auto',
		},
	display_block:{
		  height: 100,
		  width: 100,//!important
		  textAlign: 'center',
		  display: 'inline-block',
		  marginLeft: 5,
		  marginTop:5,
		  backgroundColor: '#FF9800'
	},
	raised_button	:{
		margin: 12,
		height:80,
	},
	scrope :{
		margin:5,

	},
	triangles : {
		width: 'auto',
		height: 0,
		textIndent: '-9999px',
		borderRight: '80px solid transparent',
		borderBottom: '80px solid rgb(83, 165, 82)',//'80px solid #f09',
		borderLeft:'80px solid transparent',
		//'border-right-width':'1000px'
	},
	triangles_head : {
		width: 0,
		height: 0,
		textIndent: '-9999px',
		borderRight: '80px solid transparent',
		borderBottom: '80px solid rgb(101, 18, 38)',
		borderLeft:'80px solid transparent',
		marginTop: '-96px'
	},
	content_reserve :{
		marginLeft: 15,
		marginRight: 15,
		marginTop: 5
	},
	rm_style:{
		backgroundColor:'#3F51B5'
	},
	hr_style:{
		'borderTop': '2px dotted #8c8b8b'
	

	}
}



class Reserve extends Component{

	render(){
		const {rooms,roomscol} = this.props
		var percen=95;
		var info_data = [];
		var total=[];
		var uid;
		var num_rooms;
		var status_room;
		var display = [];
		_.map(roomscol,(roomcol)=>
			total={
				rm_level:roomcol.totalLevel,
				rm_total:roomcol.totalRooms,
				rm_rows_col:roomcol.levelRooms
			});

		_.map(rooms,(val)=>num_rooms=val);
		if(num_rooms){
			for(var l=0;l<num_rooms.length;l++){
					num_rooms[l]={
						id:num_rooms[l].id,
						level:num_rooms[l].level,
						tenant_id:num_rooms[l].tenant_id
					}
				}
		}
	/*	for(var a=0;a<total.level;a++){

					test.push([{'dd':a}:[]]);
		}*/

		for(var m=0;m<total.rm_level;m++){
			info_data.push([]);

		}
	
		for(var i=0;i<total.rm_level;i++){ // level
			for(var c=0;c<total.rm_total[i];c++){
				info_data[i].push([]);
			}
			for(var j=0;j<total.rm_total;j++){ // room
				if(typeof num_rooms[j].level !== undefined){
					if(num_rooms[j].level===(i+1)){
						num_rooms[j].tenant_id?uid=num_rooms[j].tenant_id:uid='';
						info_data[i].push({rid:num_rooms[j].id,uid:uid});
					}	
				}
			}
			
		}
		if(info_data){
			info_data.sort(function(a,b){
				return b[0].rid-a[0].rid
			})	
		}

if(info_data){
	for(var x=0;x<info_data.length;x++){
		display.push( <hr className="hr_style_a" key={x} />)
		for(var y=0;y<info_data[x].length;y++){
			var height_val=percen/info_data[x].length;
			var val_box=height_val.toString().concat('%');
			//console.log('xxxxxxxx====>',screen.width)
			if(info_data[x][y].uid===''){
		display.push(
			<Link
			 key={info_data[x][y].rid}
			 to={{ pathname: `/reserve/list/${info_data[x][y].rid}` }}>			
				<RaisedButton 					
					label={info_data[x][y].rid} 
					backgroundColor="#E91E63" 
					style={{margin: 5,width:val_box}} />
			</Link>
				)
			}else{
				display.push(
					<RaisedButton 
					label={info_data[x][y].rid} 
					backgroundColor="#E91E63" 
					style={styles.raised_button} 
					icon={<ActionAccount />} />
				)
			}
		}

	}
}	
		return(

			<div style={styles.content_reserve}> 
			<p style={styles.triangles}></p><p style={styles.triangles_head}></p>
			<Paper style={styles.scrope}>
			{
				display
			}
			</Paper>
			</div>                        
											
			)
	}
}


export default Reserve;
