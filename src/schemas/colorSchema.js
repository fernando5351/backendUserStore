const Joi = require('joi');

const id = Joi.number().integer();

const getUser = Joi.object({
    id: id.required()
})

module.exports = {
    getUser
}