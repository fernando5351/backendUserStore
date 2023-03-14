const router = require("express").Router();

const User = require("./userRouter");
const Color = require("./colorRouter");
const Decoration = require("./decorationRouter");
const Flavor = require("./flavorRouter");
const Pastel = require("./pastelRouter");
const Size = require("./sizeRouter");
const Shopping = require("./shoppingRouter.js");
const Comments = require("./commentsRouter.js")

function routerApi(app){
    //http://localhost:9000/api/v1/comments
    app.use('/api/v1', router);
    router.use('/users', User);
    router.use('/colors', Color);
    router.use('/decoration', Decoration);
    router.use('/flavor', Flavor);
    router.use('/pastel', Pastel);
    router.use('/size', Size);
    router.use('/shopping', Shopping);
    router.use('/comments', Comments);
}

module.exports = routerApi;