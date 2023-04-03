const sequelize = require('sequelize');
const sequelize_db = new sequelize({
    dialect: 'sqlite',
    storage: './coach.sqlite'
});

const db = {};

db.sequelize = sequelize;
db.sequelize_db = sequelize_db;
db.Coach = require('./coach.model.js')(sequelize_db, sequelize);

module.exports = db;
