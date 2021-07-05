const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  console.log('Request accepted');
  res.send({
    data: {
      name: 'yt-example',
    },
  });
});

app.use(express.json());

app.post('/post-request', (req, res) => {
  console.log('This is post request', req.body);
  res.end();
});

module.exports = app;
