const fromRequest_get = (req) => {
    return {
        Pid: req.query.Pid
    };
};

const fromRequest_all_get = (req) => {
    return {
        Uid: req.query.Uid
    };
};

const fromRequest_create = (req) => {
    return {
        Uid: req.body.Uid,
        birth: req.body.birth,
        gender: req.body.gender,
        src: req.body.src,
        kind: req.body.kind,
        name: req.body.name,
        neutering: req.body.neutering,
        vaccination: req.body.vaccination,
        weight: req.body.weight,
        allergic: req.body.allergic,
        ill: req.body.ill,
        bath: req.body.bath
    };
};

const fromRequest_update = (req) => {
    return {
        Pid: req.body.Pid,
        Uid: req.body.Uid,
        birth: req.body.birth,
        gender: req.body.gender,
        src: req.body.src,
        kind: req.body.kind,
        name: req.body.name,
        neutering: req.body.neutering,
        vaccination: req.body.vaccination,
        weight: req.body.weight,
        allergic: req.body.allergic,
        ill: req.body.ill,
        bath: req.body.bath
    };
};

const fromRequest_delete = (req) => {
    return {
        Pid: req.query.Pid
    };
};

const fromRequest_main_get = (req) => {
    return {
        Uid: req.query.Uid
    };
};

const fromRequest_main_update = (req) => {
    return {
        Pid: req.body.Pid,
        Uid: req.body.Uid
    };
};

module.exports = { fromRequest_get, fromRequest_all_get, fromRequest_create, fromRequest_update, fromRequest_delete, fromRequest_main_get, fromRequest_main_update };
