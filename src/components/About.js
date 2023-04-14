import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './ProfileClass'
import ProfileFunctional from './Profile'
class About extends Component {
  constructor(props) {
    super (props);
    console.log("Parent - constructor")
  }

  componentDidMount() {
    console.log("Parent - componentDidMount")
  } 
render() {
  console.log("Parent - render")
  return (
    <div>
        <h1>About Us Page</h1>
        <p>This is a part of Namaste React Live Course Chapter 07</p>
        <Profile name={' first child'} xyz={'abc'}/>
    </div>
  )
}
}
export default About