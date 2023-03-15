const cosmeticratingDao = require('../daos/cosmeticratingDao')
const cosmeticratingDto = require('../dtos/cosmeticratingDto')

/**
 * @swagger
 * /cosmeticrating:
 *   get:
 *     summary: 화장품 리뷰점수 조회
 *     tags:
 *       - 화장품 리뷰점수
 *     description:
 *       "Cid: 화장품 id (필수)"
 *     parameters:
 *       - name: Cid
 *         description: 화장품 id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const getCosmeticRating = async (req, res) => {
    try {
        const request = cosmeticratingDto.fromRequest_get(req);
        const pet = await cosmeticratingDao.Get(request.Cid);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
/**
 * @swagger
 * /cosmeticrating:
 *   put:
 *     summary: 화장품 리뷰점수 업데이트
 *     tags:
 *       - 화장품 리뷰점수
 *     description:
 *       "Cid: 화장품 id (필수)
 *       rating: 화장품 id (필수)
 *       "
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Cid:
 *                 type: integer
 *               rating:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const updateCosmeticRating = async (req, res) => {
    try {
        const request = cosmeticratingDto.fromRequest_update(req);
        const cosmeticrating = await cosmeticratingDao.Update(request,1);
        res.status(200).json(cosmeticrating);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { getCosmeticRating, updateCosmeticRating}