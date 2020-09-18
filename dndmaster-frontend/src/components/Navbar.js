import React from 'react'
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { handleLogout } from '../actions/actions';

class Navbar extends React.Component {
  
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLogoutClick() {
    this.props.handleLogout();
    this.props.history.push('/')
  }

  // renderlog() {
  //   if (this.props.loggedInStatus === "NOT_LOGGED_IN") {
  //     return (
  //       <button style={nolog}>Not Logged In</button>
  //     )
  //   }
  //   else if (this.props.loggedInStatus === "LOGGED_IN") {
  //     return (
  //       <button style={yeslog}>Logged In</button>
  //     )
  //   }
  // }
  
  // renderlogout() {
  //   if (this.props.loggedInStatus === "LOGGED_IN") {
  //     return (
  //       <button
  //       style={loggedout}
  //       onClick={() => this.handleLogoutClick()}>Logout</button>
  //     )
  //   }
  // }

  render() {
    return (
      <nav className="navbar">
        <NavLink
          to="/"
          exact
          activeStyle={{background: 'maroon'}}
        >Home</NavLink>
        <NavLink
          to="/login"
          exact
          activeStyle={{background: 'maroon'}}
        >Login</NavLink>
        <NavLink
          to="/signup"
          exact
          activeStyle={{background: 'maroon'}}
        >Sign Up</NavLink>
        <NavLink
          to="/campaign"
          exact
          activeStyle={{background: 'maroon'}}
        >New Campaign</NavLink>
        <NavLink
          to="/campaignlist"
          exact
          activeStyle={{background: 'maroon'}}
        >Campaign List</NavLink>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {teams: state.teams, loggedInStatus: state.user.loggedInStatus, user: state.user.user}
}

export default connect(mapStateToProps, { handleLogout })(withRouter(Navbar))