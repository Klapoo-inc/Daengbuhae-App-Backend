

const fromRequest_all_get = (req) => {
    return {
        Uid: req.query.Uid
    };
};

const fromRequest_create = (req) => {
    return {
        Uid: req.body.Uid,
        search: req.body.search
    };
};



const fromRequest_delete = (req) => {
    return {
        Sid: req.query.Sid
    };
};



module.exports = {fromRequest_all_get, fromRequest_create, fromRequest_delete};
