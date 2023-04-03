const { Coach } = require('../models');
const db = require('../models')
const coachModel = db.Coach
const op = db.sequelize.op
const appointmentSchema = require('../schemas/coach.schema')

const isCoachAvailable = async (name, date) => {
  const coach = await coachModel.findOne({ where: { name } });
  if (!coach) {
    return false;
  }

  const timezone = coach.timezone;
  const dayOfWeek = moment(date).tz(timezone).day();
  const hour = moment(date).tz(timezone).hour();

  if (dayOfWeek !== coach.dayOfWeek ||
    hour < coach.startHour ||
    hour >= coach.endHour) {
      return false;
    }

    return true;
  };

exports.appointment = (req, res) => {
  const { error, value } = appointmentSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  };

  // check coach validation here
  if (!isCoachAvailable(value)) {
    return res.status(409).json({ error: 'Coach is not available at the requested time' });
  }

  const appointment = {
    id: Math.floor(Math.random() * 1000000),
    name: value.name,
    email: value.email,
    date: value.date
  }

  res.status(201).json({ data: appointment });
}
