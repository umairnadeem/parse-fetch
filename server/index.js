const express = require('express');
const path = require('path');
const lib = require('./lib');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/oauth/linkedin', (req, res) => {
  let requestToken = req.query.code;
  lib.getAccessToken(requestToken)
    .then(token => {
      lib.getUsers(token)
      // console.log(token)
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));