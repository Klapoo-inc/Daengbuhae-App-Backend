const { Sequelize, sequelize } = require('../sequelize');

const UserTracking = sequelize.define('UserTracking', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
    }
}, {
    tableName: "UserTracking",
    paranoid: true,
});

module.exports = UserTracking;
