import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItems = ({ user: { avatar_url, html_url, login } }) => {
  return (
    <div class='row'>
      <div class='col m7'>
        <div class='card' style={{ height: "18rem", width: "10rem" }}>
          <div class='card-image'>
            <img src={avatar_url} alt='avatar' className='responsive-img' />
            <span class='card-title'> </span>
          </div>
          <div class='card-content'>
            <p className='center-align'>
              <strong>{login}</strong>
            </p>
          </div>
          <div class='card-action'>
            <Link to={`/user/${login}`}> More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

UserItems.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItems;
