const UserSearch = require('../models/usersearchModel');
const AllGet = async (Uid) => {
    const data = await UserSearch.findAll({
        where: {
            Uid: Uid
        },
        limit:10,
        order:[['createdAt', 'DESC']],
    });
    return data;
};

const Create = async (req) => {
    const result = await UserSearch.create(req);
    return result;
};

const Delete = async (Sid) => {
    const data = await UserSearch.findByPk(Sid);
    if (!data) {
        return null;
    }
    await data.destroy();
    return data;
};


module.exports = {AllGet, Create, Delete};
