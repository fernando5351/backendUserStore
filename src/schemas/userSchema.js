const joi = require("joi");

const id = joi.number().integer();
const name = joi.string();
const lastname = joi.string();
const age = joi.number();
const direction = joi.string();
const email = joi.string().email();
const password = joi.string();
const cellphone = joi.string();

const createUserSchema = joi.object({
    name: name.required(),
    lastname: lastname.required(),
    age: age.required(),
    direction: direction.required(),
    email: email.required(),
    password: password.required(),
    cellphone: cellphone.required()
});

const updateUserSchema = joi.object({
    name: name.required(),
    lastname: lastname.required(),
    age: age.required(),
    direction: direction.required(),
    email: email.required(),
    password: password.required(),
});

const loginSchema = joi.object({
    password: joi.string().required(),
    email: joi.required(),
});

const getUserSchema = joi.object({
    id: id.required(),
});

module.exports = {
    createUserSchema,
    updateUserSchema,
    getUserSchema,
    loginSchema
}