import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItems = ({ user: { avatar_url, html_url, login } }) => {
  return (
    <Link to={`/user/${login}`}>
      <div
        className='card text-center'
        style={{
          backgroundColor: "#f4f4f4"
        }}
      >
        <img
          src={avatar_url}
          alt='avatar'
          className='round-img'
          style={{ width: "75px" }}
        />
        <h3> {login} </h3>
        <div>
          <h1 className='btn btn-dark btn-sm my-1'>More</h1>
        </div>
      </div>
    </Link>
  );
};

UserItems.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItems;
