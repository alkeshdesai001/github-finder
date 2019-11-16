import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter somthing...", "light");
      githubContext.searchUsers(text);
      setText("");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
          style={{ display: "block", width: "100%", margin: "1rem 0" }}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-primary btn-block'
          style={{
            display: "block",
            width: "100%",
            margin: "1rem 0",
            backgroundColor: "#166772"
          }}
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-dark btn-block my-1'
          style={{
            display: "block",
            width: "100%",
            backgroundColor: "black",
            color: "white",
            margin: "1rem 0"
          }}
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
