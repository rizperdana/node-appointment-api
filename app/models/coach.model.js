module.exports = (sequelize_db, sequelize) => {
    const coach_model = sequelize_db.define('coach', {
        name: { type: sequelize.STRING },
        timezone: { type: sequelize.STRING },
        day_of_week: { type: sequelize.STRING },
        available_at: { type: sequelize.STRING },
        available_until: { type: sequelize.STRING },
    });

    return coach_model;
};
