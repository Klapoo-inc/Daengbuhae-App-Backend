const Cosmetic = require('../models/cosmeticModel');
const { Op } = require('sequelize');

const search = async (title, BCategory, SCategory, page, limit) => {
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
        };
    };
    const data = await Cosmetic.findAndCountAll({
        where: query,
        offset,
        limit,
        order: [['src', 'DESC']]
    });
    return { data: data.rows, total: data.count };
}

module.exports = { search };
