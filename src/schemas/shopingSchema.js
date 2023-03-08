const Joi = require("joi");

const id = Joi.number().integer();
const idPastel = Joi.number();
const idFlavor1 = Joi.number();
const idFlavor2 = Joi.number();
const idDecoration = Joi.number();
const idUser = Joi.number();
const cant  = Joi.number();
const idColor1 = Joi.number();
const idColor2 = Joi.number();

const createShoppingSchema = Joi.object({
    idPastel: idPastel.required(),
    idFlavor1: idFlavor1.required(),
    idFlavor2: idFlavor2.required(),
    idDecoration: idDecoration.required(),
    idUser: idUser.required(),
    idColor1: idColor1.required(),
    idColor2: idColor2.required()
});

const getSchopping = Joi.object({
    id: id.required()
});

module.exports = {
    createShoppingSchema,
    getSchopping
}