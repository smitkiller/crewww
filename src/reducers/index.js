import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import pages from './pages';
import datas from './datas';
import login from './login';
import rooms from './rooms';
import roomscol from './roomscol';
import reserves from './reserves';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  pages,
  datas,
  login,
  rooms,
  roomscol,
  reserves
})
