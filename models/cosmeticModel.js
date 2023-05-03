const { Sequelize, sequelize } = require('./sequelize');
const CosmeticIngredient = require('./cosmeticingredientModel')
const CosmeticRating = require('./cosmeticratingModel')

const Cosmetic = sequelize.define('Cosmetic', {
    Cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    brand: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    SCategory: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    BCategory: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    src: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    AvgRating: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    read: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    NInhibition: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    NLimit: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Allergic: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    CountFunctional: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    CountRating: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    CoupangSrc: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    CountColor: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    PPH: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    texture: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    effect: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    use: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    method: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    note: {
        type: Sequelize.TEXT,
        allowNull: true,
    },

}, {
  tableName: "Cosmetic",
    paranoid: true,},
{
    hooks: {
        beforeDestroy: async (user, options) => {

        }
    }
});
Cosmetic.addHook('beforeDestroy', async (cosmetic,options)=>{
    await CosmeticIngredient.destroy({ where: { Cid: cosmetic.Cid } });
})
Cosmetic.addHook('beforeUpdate', async (cosmetic,options)=>{
    await CosmeticIngredient.destroy({ where: { Cid: cosmetic.Cid } });
})
Cosmetic.hasMany(CosmeticIngredient, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey:'Cid',
    sourceKey:'Cid',
    hooks: true  });
Cosmetic.hasOne(CosmeticRating,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey:'Cid',
    sourceKey:'Cid',
    hooks: true  })
CosmeticIngredient.belongsTo(Cosmetic, { sourceKey:'Cid' ,onDelete: 'CASCADE' });

module.exports = Cosmetic;
