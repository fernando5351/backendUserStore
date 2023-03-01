const router = require("express").Router();

function routerApi(app){
    app.use('/api/v1', router);
}

module.exports = routerApi;