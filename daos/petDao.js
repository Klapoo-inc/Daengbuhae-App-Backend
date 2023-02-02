const Pet = require('../models/petModel');

const Get = async (Cid, Uid) => {
    const data = await Pet.findOne({
        where: {
            Cid: Cid,
            Uid: Uid
        }
    });
    return data;
};

const Create = async (Cid, Uid) => {
    const result = await Pet.create({
        Cid: Cid,
        Uid: Uid
    });
    return result;
};

const Delete = async (Cid, Uid) => {
    const data = await Pet.findOne({
        where: {
            Cid: Cid,
            Uid: Uid
        }
    });
    if (!data) {
        return null;
    }
    await data.destroy();
    return data;
};

module.exports = { Get, Create, Delete };
