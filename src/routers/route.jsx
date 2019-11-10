import React,{Component} from 'react';
import { Router,Route,IndexRoute } from 'react-router';
import { connect } from 'react-redux';
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
        RoomsCol,
        NewRooms,
        EditRoomscol,
        CheckAuthed,
        Home,
        Users,
        NewUser,
        ShowUser,
        EditUser,
        ResetPass } from '../containers';


class Routes extends Component {
  render() {
  const {history} = this.props

    return (
      <div>
         <Router history={history}>       
          <Route path="/" exact component={Home} />

          <Route path="about"   component={About}/>
          
        <Route>
              <Route path="app" component={CheckAuthed(App)} />
              
            <Route path='users' >
                <IndexRoute component={CheckAuthed(Users)} />
                <Route path='new'component={CheckAuthed(NewUser)} />
                <Route path=':id'component={CheckAuthed(ShowUser)} />
               <Route path='edit'>
                      <Route path=':id' component={CheckAuthed(EditUser)} />
                </Route>              
                <Route path='reset'>
                      <Route path=':id' component={CheckAuthed(ResetPass)} />
                </Route>
            </Route> 

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