const Joi = require('joi');

const appointmentSchema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    date: Joi.date().required()
}

module.exports = {
    appointmentSchema
}
