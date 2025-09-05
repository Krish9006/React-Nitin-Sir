import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Loading...",
        avatar_url: null,
      },
    };

    console.log("constructor - " + this.props.username);
  }

  async componentDidMount() {
    console.log("componentDidMount - " + this.props.username);
    const response = await fetch(`https://api.github.com/users/${this.props.username}`);
    const data = await response.json();
    
    this.setState({
      userInfo: data,
    });
  }

  render() {
    console.log("render - " + this.props.username);
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card" style={{ border: "1px solid #ddd", margin: "10px", padding: "10px", borderRadius: "8px" }}>
        <img
          src={avatar_url || "https://via.placeholder.com/150"}
          alt="profile"
          width="150"
          style={{ borderRadius: "50%" }}
        />
        <h2>Username : {name}</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass;
