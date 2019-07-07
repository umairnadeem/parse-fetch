const axios = require('axios');
const config = require('../config');

function getAccessToken(requestToken) {
  return axios.post(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${requestToken}&redirect_uri=http://localhost:3000/oauth/linkedin&client_id=${config.id}&client_secret=${config.secret}`)
    .then(res => res.data.access_token)
    .catch(err => console.error(err));
}

function getUsers(authToken) {
  console.log(authToken)
  return axios.get('https://api.linkedin.com/v2/connections?q=viewer&start=0&count=50', { 'headers': { 'Authorization': authToken } })
  .catch(err => console.error(err));
}

module.exports = {
  getAccessToken,
  getUsers
};