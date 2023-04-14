import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        bio: "Dummy bio"
      }
    }
  }

  async componentDidMount() {
    console.log("Child  - componentDidMount" + this.props.name)
    const data = await fetch("https://api.github.com/users/shreyaghate02")
    const json = await data.json();
    this.setState ({
      userInfo: json,
    })
  } 

  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h1>Name: {this.state.userInfo.name} </h1>
        <img src={this.state.userInfo.avatar_url} alt="Profile Image"/>
        <h1>Location: {this.state.userInfo.location} </h1>
        <h1>About me: {this.state.userInfo.bio} </h1>
      </div>
    );
  }
}

export default Profile;
