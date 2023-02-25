const { Sequelize, sequelize } = require('./sequelize');

const Pet = sequelize.define('Pet', {
    Pid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Uid: {
        type: Sequelize.STRING(128),
        allowNull: false,
        foreignKey: true,
    },
    birth: {
        type: Sequelize.STRING(128),
        allowNull: true,
    },
    gender: {
        type: Sequelize.STRING(128),
        allowNull: true,
    },
    src: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    kind: {
        type: Sequelize.STRING(128),
        allowNull: true,
    },
    name: {
        type: Sequelize.STRING(128),
        allowNull: true,
    },
    neutering: {
        type: Sequelize.STRING(128),
        allowNull: true,
    },
    vaccination: {
        type: Sequelize.STRING(128),
        allowNull: true,
    },
    weight: {
        type: Sequelize.STRING(128),
        allowNull: true,
    },
    allergic: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    ill: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    bath: {
        type: Sequelize.STRING(128),
        allowNull: true,
    },
}, {
    tableName: "Pet",
    paranoid: true,
});

module.exports = Pet;
