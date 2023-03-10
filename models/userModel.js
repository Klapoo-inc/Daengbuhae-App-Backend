const { Sequelize, sequelize } = require('./sequelize');
const Pet = require('./petModel')
const UserSearch = require('./usersearchModel')
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
}, {
    hooks: {
        beforeDestroy: async (user, options) => {

        }
    }
});
User.addHook('beforeDestroy', async (user,options)=>{
    await Pet.destroy({ where: { Uid: user.Uid } });
    await UserSearch.destroy({ where: { Uid: user.Uid } });
})
User.hasMany(Pet, { onDelete: 'CASCADE', onUpdate: 'CASCADE', hooks: true  });
Pet.belongsTo(User, { onDelete: 'CASCADE' });
module.exports = User;
