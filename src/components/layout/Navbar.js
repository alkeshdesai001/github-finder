import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <Fragment>
      <nav style={{ backgroundColor: "#166772" }}>
        <div className='nav-wrapper'>
          <a href='#!' data-target='mobile-demo' class='sidenav-trigger' />
          <a href='#!' class='brand-logo'>
            <i className='material-icons'>play_arrow</i>
            <h5 style={{ display: "inline-block" }}>{title}</h5>
          </a>
          <ul class='right hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className='collection hide-on-large-only' id='mobile-demo'>
        <Link to='/' className='collection-item'>
          Home
        </Link>
        <Link to='/about' className='collection-item'>
          About
        </Link>
      </div>
    </Fragment>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
