const axios = require("axios");


const api = {
  async getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    try {
      const response = await axios.get(queryUrl);
      return(response.data);
    } catch (error) {
      console.error(error);
    } 
  }
};




module.exports = api;




