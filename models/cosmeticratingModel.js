const { Sequelize, sequelize } = require('./sequelize');

const CosmeticRating = sequelize.define('CosmeticRating', {
        Cid: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        rating1:{
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue:0
        },
        rating2:{
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue:0
        },
        rating3:{
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue:0
        },
        rating4:{
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue:0
        },
        rating5:{
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue:0
        },
        avr:{
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue:0
        }
    }, {
        tableName: "CosmeticRating",
        paranoid: true,
},);


module.exports = CosmeticRating;
