const Joi = require('Joi');

const appointment_schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    date: Joi.date().required()
}

module.exports = {
    appointment_schema
}
