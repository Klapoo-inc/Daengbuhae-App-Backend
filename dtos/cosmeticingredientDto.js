const fromRequest_create =(req) => {
    return {
        Cid: req.body.Cid,
        ingredients: req.body.ingredients
    }
}

module.exports = { fromRequest_create}