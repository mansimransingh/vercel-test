const app = require('express')();
const { v4 } = require('uuid');

app.get('/', (req, res) => {
  res.json(JSON.stringify(req.headers));
});

module.exports = app;