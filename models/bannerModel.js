const { Sequelize, sequelize } = require('./sequelize');

const Banner = sequelize.define('Banner', {
    Bid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    read: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    src: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
}, {
    tableName: "Banner",
    paranoid: true,
});

module.exports = Banner;
