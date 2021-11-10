import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    {" "}
    {/* The navbar will show these links after you log in */}
    {isLoggedIn ? (
      <div class='navcontainer'>
        <Link to='/home'>
          {" "}
          <h1 class='logo'>PEACH STUDIO</h1>
        </Link>
        <div class='navbuttons'>
          <Link to='/home'>Home</Link>
          <a href='#' onClick={handleClick}>
            Logout
          </a>
        </div>
      </div>
    ) : (
      <div class='navcontainer'>
        {/* The navbar will show these before you log in */}
        <Link to='/'>
          {" "}
          <h1 class='logo'>PEACH STUDIO</h1>
        </Link>
        <div class='navbuttons'>
          <Link class='navlink' to='/login'>
            LOGIN
          </Link>
          <Link class='navlink' to='/signup'>
            SIGN UP
          </Link>
          <Link class='navlink' to='/products'>
            SHOP
          </Link>
        </div>
      </div>
    )}
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);