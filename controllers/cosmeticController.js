const cosmeticDao = require('../daos/cosmeticDao');
const cosmeticDto = require('../dtos/cosmeticDto');

/**
 * @swagger
 * /cosmetic/search:
 *   post:
 *     summary: 화장품 검색
 *     tags:
 *       - 화장품
 *     description:
 *       "title: string / 기본값 undefined (화장품 명 혹은 브랜드 명) <br>
 *       BCategory: string / 기본값 undefined <br>
 *       SCategory: string / 기본값 undefined <br>
 *       NInhibition: bool / 기본값 undefined  <br>
 *       NLimit: bool / 기본값 undefined <br>
 *       Allergic: bool / 기본값 undefined <br>
 *       filter: list(string) / 기본값 undefined <br>
 *       page: int / 기본값 1 <br>
 *       limit: int / 기본값 10"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               BCategory:
 *                 type: string
 *               SCategory:
 *                 type: string
 *               NInhibition:
 *                 type: boolean
 *               NLimit:
 *                 type: boolean
 *               Allergic:
 *                 type: boolean
 *               filter:
 *                 type: array
 *                 items:
 *                   type: string
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
        const request = cosmeticDto.fromRequest_search(req);
        const cosmetics = await cosmeticDao.search(request.title !== undefined ? request.title : "", request.BCategory, request.SCategory, request.NInhibition, request.NLimit, request.Allergic, request.filter, request.page? request.page : 1, request.limit? request.limit : 10);
        const cosmeticsDto = {
            total: cosmetics.total,
        }
        cosmeticsDto.data = cosmetics.data.map(cosmeticDto.fromDb_search);
        res.status(200).json(cosmeticsDto);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /cosmetic/get:
 *   post:
 *     summary: 화장품 상세조회
 *     tags:
 *       - 화장품
 *     description:
 *       "Cid : cosmetic ID 값 (필수)"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Cid:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const getCosmetic = async (req, res) => {
    try {
        const request = cosmeticDto.fromRequest_get(req);
        const cosmeticDetail = await cosmeticDao.get(request.Cid);
        const cosmeticDetailDto = cosmeticDto.fromDb_get(cosmeticDetail);
        res.status(200).json(cosmeticDetailDto);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { searchCosmetics, getCosmetic };
