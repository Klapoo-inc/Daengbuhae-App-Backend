const Pet = require('../models/petModel');

const Get = async (Pid, Uid) => {
    const data = await Pet.findOne({
        where: {
            Pid: Pid,
            Uid: Uid
        }
    });
    return data;
};

const Create = async (pet) => {
    const result = await Pet.create(pet);
    return result;
};

const Update = async (pet) => {
    const result = await Pet.create(pet);
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
