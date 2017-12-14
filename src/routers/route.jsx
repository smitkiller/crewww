import React,{Component} from 'react';
import { Router,Route,IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
        App,
        About,
        NotFound } from '../components';
import { 
        Pages,
        NewPage,
        ShowPage,
        EditPage,
        Login,
        Reserve,
        ReserveList,
        Users,
        RoomsCol,
        NewRooms,
        EditRoomscol,
        CheckAuthed,
        Home } from '../containers';


class Routes extends Component {
  render() {
  const {history,authed} = this.props

    return (
      <div>
         <Router history={history}>       
          <Route path="/" exact component={Home} />

          <Route path="about"   component={About}/>
          
        <Route>
              <Route path="app" component={CheckAuthed(App)} />
              
              <Route path="users" component={CheckAuthed(Users)}/>

              <Route path="roomcol" >
                  <IndexRoute component={CheckAuthed(RoomsCol)} />
                  <Route path="new" component={CheckAuthed(NewRooms)}/>
                  <Route path="edit" >
                      <Route path=':id' component={CheckAuthed(EditRoomscol)} />
                  </Route>
              </Route>              

              <Route path='pages' >
                <IndexRoute component={CheckAuthed(Pages)} />
                <Route path='new'component={CheckAuthed(NewPage)} />
                <Route path=':id'component={CheckAuthed(ShowPage)} />
               <Route path='edit'>
                      <Route path=':id' component={CheckAuthed(EditPage)} />
                </Route>
             </Route> 
          </Route>
           <Route path="reserve" >
              <IndexRoute component={Reserve} />
              <Route path="list" >
                <Route path=':id' component={ReserveList} />
              </Route>
           </Route>
          <Route path="login" component={Login} />
          <Route path='*' component={NotFound} />     
          </Router>
      </div>
    )
  }
}



export default Routes;