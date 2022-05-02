import React, { useState } from "react";
import getUser from "../actions/fetchUser";
import { connect } from "react-redux";
import "../style/SearchBar.css";

const SearchBar = ({loading, fetchUser}) => {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(username);
  };

  return (
    <div className="form-wrapper">
      <h1>Enter github username</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="User name"
          value={username}
          onChange={handleChange}
          required
        />
        <input
          className="button"
          type="submit"
          value={loading ? "Searching..." : "Search"}
          disabled={loading}
        />
      </form>
    </div>
  );
};

const mapState = (state) => ({
  loading: state.loading,
});
const mapDispatch = (dispatch) => ({
  fetchUser: (username) => dispatch(getUser(username)),
});
export default connect(mapState, mapDispatch)(SearchBar);
// export default SearchBar;
