const { Sequelize, sequelize } = require('./sequelize');

const ReviewReport = sequelize.define('ReviewReport', {
    RRid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    Rid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    Uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
        foreignKey: true,
    },

    state: {
        type: Sequelize.TINYINT,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING(128),
        allowNull: false,
    }
}, {
    tableName: "ReviewReport",
    paranoid: true,
});

module.exports = ReviewReport;
