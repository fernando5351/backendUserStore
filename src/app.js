const express = require('express');
const cors = require("cors");
const routerApi = require("./routes");
const port = process.env.PORT || 5000;
const { logErrors, errorHandler, boomErrorHandler } = require("./middlewares/errorHandler")
const app = express();

app.set("port", port);
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

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler)

module.exports = app;