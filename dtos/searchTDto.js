const fromRequest_create = (req) => {
    return {
        Uid: req.body.Uid? req.body.Uid: "undefined user",
        query: req.body.query
    };
};

module.exports = {fromRequest_create}