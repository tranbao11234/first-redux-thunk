import axios from "axios";

const fetchUserService = async (username) => {
  return await axios.get(`https://api.github.com/users/${username}`);
};

export default fetchUserService;
