import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Home,Header} from '../components'

class HomesContainer extends Component {

  render() {
    return (
      <div><div>
          <Header txtTitle='Home'/>
          <Home />
      </div></div>
    )
  }
}


export default HomesContainer;
