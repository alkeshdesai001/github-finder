import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <h6 style={{ color: "#000000", fontSize: "0.65rem" }}>
        Created by Alkesh Desai
      </h6>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fa fa-search"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
