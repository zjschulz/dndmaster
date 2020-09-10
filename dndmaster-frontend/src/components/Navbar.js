import React from 'react'
import { NavLink } from 'react-router-dom';
// import { withRouter } from "react-router";
// import { connect } from 'react-redux';

export default class Navbar extends React.Component {
  
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <nav className="navbar">
        <NavLink
          to="/"
          exact
          activeStyle={{background: 'maroon'}}
        >Home</NavLink>
      </nav>
    )
  }
}