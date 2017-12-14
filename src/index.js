import './index.css';
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import Root from './containers/Root'
import injectTapEventPlugin from 'react-tap-event-plugin';
 
injectTapEventPlugin();
const initialState = window.__INITIAL_STATE__;
const rootEl = document.getElementById('root')

render(
 <AppContainer>
    <Root
      history={browserHistory}
      initialState={initialState} />
 </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRootApp = require('./containers/Root').default

    render(
     <AppContainer>
         <NextRootApp
           history={browserHistory}
           initialState={initialState} />
     </AppContainer>,
      rootEl
    )
  })
}
