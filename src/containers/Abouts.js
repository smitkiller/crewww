import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'

class Abouts extends Component{
  state={
    abouts:[]
  }
  componentDidMount(){
    fetch('http://127.0.0.1:3001/api/v1/pages')
    .then((response)=>response.json())
    .then((abouts)=>this.setState({abouts}))
  }
  render(){
    return(
      <table className='table'>
      <thead>
      <tr>
      <th>id</th>
      <th>title</th>
      </tr>
      </thead>
      <tbody>
    {
      this.state.abouts.map((about) =>(
        <tr key={about.id} >
        <th>{about.id}</th>
        <td>{about.title}</td>
        </tr>

      ))
    }
    </tbody>
    </table>
    )
  }
}
export default Abouts
