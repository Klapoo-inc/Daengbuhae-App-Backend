const Cosmetic = require('../models/cosmeticModel');
const { Op } = require('sequelize');

const search = async (title, BCategory, SCategory, NInhibition, NLimit, Allergic, filter, page, limit) => {
    const offset = (page - 1) * limit;
    const query = {
      [Op.and]: [
          {
              [Op.or]: [
                  Cosmetic.sequelize.where(Cosmetic.sequelize.fn('CONCAT', Cosmetic.sequelize.fn('REGEXP_REPLACE', Cosmetic.sequelize.col('title'), ' ', ''), ' '), {
                      [Op.like]: Cosmetic.sequelize.fn('CONCAT', '%', Cosmetic.sequelize.fn('REGEXP_REPLACE', title, ' ', ''), '%')
                  }),
                  Cosmetic.sequelize.where(Cosmetic.sequelize.fn('CONCAT', Cosmetic.sequelize.fn('REGEXP_REPLACE', Cosmetic.sequelize.col('brand'), ' ', ''), ' '), {
                      [Op.like]: Cosmetic.sequelize.fn('CONCAT', '%', Cosmetic.sequelize.fn('REGEXP_REPLACE', title, ' ', ''), '%')
                  }),
              ]
          },
      ]
    };
    if (BCategory !== undefined) {
        query[Op.and].push({
            BCategory: {
                [Op.eq]: BCategory
            }
        });
        if (SCategory !== undefined) {
            query[Op.and].push({
                SCategory: {
                    [Op.eq]: SCategory
                }
            });
        }
    }
    if (NInhibition) {
        query[Op.and].push({
            NInhibition: {
                [Op.gt]: 0
            }
        });
    }
    if (NLimit) {
        query[Op.and].push({
            NLimit: {
                [Op.gt]: 0
            }
        });
    }
    if (Allergic) {
        query[Op.and].push({
            Allergic: {
                [Op.gt]: 0
            }
        });
    }
    if (filter) {
        let filter_query = {[Op.or]: []};
        for (const item of filter) {
            filter_query[Op.or].push({
                ['CountFunctional.' + item]: {
                    [Op.ne]: 0
                }
            });
        }
        query[Op.and].push(filter_query);
    }
    const data = await Cosmetic.findAndCountAll({
        where: query,
        offset,
        limit,
        order: [['src', 'DESC']]
    });
    return { data: data.rows, total: data.count };
};

const get = async (Cid) => {
    const data = await Cosmetic.findByPk(Cid);
    return data;
};

module.exports = { search, get };
