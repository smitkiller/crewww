import { createStore, applyMiddleware,compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import {persistStore,autoRehydrate} from 'redux-persist';
//import {firMiddleware} from 'redux-firebase-middleware';



export default (history, initialState) => {
  const middlewares = [thunk, apiMiddleware, routerMiddleware(history)]

  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(createLogger())
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares),autoRehydrate())
  )

persistStore(store)

    if (module.hot) {
    module.hot.accept('../reducers', () => {
      System.import('../reducers').then(nextRootReducer =>
        store.replaceReducer(nextRootReducer.default)
      )
    })
  }




  return store
}
