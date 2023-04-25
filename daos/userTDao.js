const userT = require('../models/tracking/userTracking')
const {sequelize} = require("../models/sequelize");
const {Op} = require("sequelize");
const Create = async (req) => {
    const result = await userT.create(req);
    return result;
};
const CountByDate = async (req) => {
    const result = await userT.findAll({
        attributes: [
            [sequelize.fn('date', sequelize.col('createdAt')), 'date'],
            [sequelize.fn('count', sequelize.col('*')), 'count']
        ],
        group: [sequelize.fn('date', sequelize.col('createdAt'))],
        where: {
            createdAt: {
                [Op.gte]: '2023-04-01 00:00:00', // replace with your start date
                [Op.lt]: '2023-04-26 00:00:00'   // replace with your end date
            }
        }
    });
    return result
}
module.exports = {Create, CountByDate}