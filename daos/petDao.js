const Pet = require('../models/petModel');
const User = require('../models/userModel');

const Get = async (Pid) => {
    const data = await Pet.findOne({
        where: {
            Pid: Pid,
        }
    });
    return data;
};

const AllGet = async (Uid) => {
    const data = await Pet.findAll({
        where: {
            Uid: Uid
        }
    });
    return data;
};

const Create = async (req) => {
    const result = await Pet.create(req);
    return result;
};

const Update = async (Pid, req) => {
    const pet = await Pet.findByPk(Pid);
    const result = await pet.update(req);
    return result;
};

const Delete = async (Pid) => {
    const data = await Pet.findByPk(Pid);
    if (!data) {
        return null;
    }
    await data.destroy();
    return data;
};

const MainGet = async (Uid) => {
    const user = await User.findByPk(Uid);
    const data = await Pet.findByPk(user.maindog);
    return data;
};

const MainUpdate = async (Pid, Uid) => {
    const user = await User.findByPk(Uid);
    const data = await user.update({ maindog: Pid });
    return data;
};

module.exports = { Get, AllGet, Create, Update, Delete, MainGet, MainUpdate };
