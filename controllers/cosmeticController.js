const cosmeticDao = require('../daos/cosmeticDao');
const cosmeticDto = require('../dtos/cosmeticDto');

/**
 * @swagger
 * /cosmetic/search:
 *   post:
 *     summary: 화장품 조회
 *     tags:
 *       - 화장품
 *     description:
 *       "title 기본값 undefined (화장품 명 혹은 브랜드 명) <br>
 *       BCategory 기본값 undefined <br>
 *       SCategory 기본값 undefined <br>
 *       page 기본값 1 <br>
 *       limit 기본값 10"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               SCategory:
 *                 type: string
 *               BCategory:
 *                 type: string
 *               page:
 *                 type: integer
 *                 default: 1
 *               limit:
 *                 type: integer
 *                 default: 10
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const searchCosmetics = async (req, res) => {
    try {
        const request = cosmeticDto.fromRequest(req);
        const cosmetics = await cosmeticDao.search(request.title !== undefined ? request.title : "", request.BCategory, request.SCategory, request.page !== undefined ? request.page : 1, request.limit !== undefined ? request.limit : 10);
        const cosmeticsDto = {
            total: cosmetics.total,
        }
        cosmeticsDto.data = cosmetics.data.map(cosmeticDto.fromDb);
        res.status(200).json(cosmeticsDto);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { searchCosmetics };
