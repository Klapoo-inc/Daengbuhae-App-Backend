const { Sequelize, sequelize } = require('./sequelize');

const User = sequelize.define('User', {
    Uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
        primaryKey: true,
    },
    ads: {
        type: Sequelize.TINYINT,
        allowNull: false,
    },
    provider: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    deleted: {
        type: Sequelize.TINYINT,
        allowNull: false,
    },
    token: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    maindog: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "User",
    paranoid: true,
});

module.exports = User;
