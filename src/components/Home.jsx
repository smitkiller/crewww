import React,{PropTypes} from 'react'
//import PropTypes from 'prop-types';
import { Link } from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import themeSite from '../img/old.jpg';
import logo from '../img/logoCrewww.png';


const style = {
  height: 100,
  width: 800,
  margin:'auto',
};

const Home = ({

}) => (
 <Card style={{'width':'80%','margin':'0 auto',marginTop:20}}>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar={logo}
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src={themeSite} alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
)

export default Home;
