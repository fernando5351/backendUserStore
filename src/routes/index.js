const router = require("express").Router();
const User = require("./userRouter");

function routerApi(app){
    app.use('/api/v1', router);
    router.use("/users", User);
}

module.exports = routerApi;