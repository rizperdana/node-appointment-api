module.exports = app => {
    const coach = require('../controllers/coach.controller')

    var router = require('express').Router()

    // make appointment
    router.post('/appointments', coach.appointment)
}
