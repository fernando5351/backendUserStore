const express = require('express');
const cors = require("cors");
const routerApi = require("./routes");
const port = process.env.PORT || 9000;
const { logErrors, errorHandler, boomErrorHandler } = require("./middlewares/errorHandler")
const app = express();

app.set("port", port);
app.use(express.json());

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use ( function ( req , res , next ) {
  res.header ( 'Access-Control-Allow-Origin' , "*" ) ;
  res.header ( 'Access-Control-Allow-Methods' , 'GET, PUT, POST, DELETE');
  res.header ( 'Access-Control-Allow-Headers' , "Origin, X-Requested-With, Content-Type, Accept");
  next();
});  
app.use(cors(corsOptions));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler)

app.use(express.static('public'));


module.exports = app;
