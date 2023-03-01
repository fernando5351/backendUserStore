const express = require('express');
const cors = require("cors");
const routerApi = require("./routes");
const port = process.env.PORT || 5000;

const app = express();

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
};

app.use(cors(options));

routerApi(app);

module.exports = app;