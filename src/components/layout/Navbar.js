import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
        <h6 style={{ color: "#000000", fontSize: "0.65rem" }}>
          Created by Alkesh Desai
        </h6>
      </h1>
    </nav>
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
