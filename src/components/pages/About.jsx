import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor - About");
  }

  componentDidMount() {
    console.log("componentDidMount - About");
  }

  render() {
    console.log("render - About");
    return (
      <div>
        <h1> About Class Component </h1>
        <h3>Learning React from pw IOI</h3>
        <UserClass username="krish9006" />   
        <UserClass username="gaearon" />  
      </div>
    );
  }
}

export default About;
