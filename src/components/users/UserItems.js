import React from "react";
import PropTypes from "prop-types";

const UserItems = ({ user: { avatar_url, html_url, login } }) => {
  return (
    <div
      className='text-center'
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
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItems.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItems;
