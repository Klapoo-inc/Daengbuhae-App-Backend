const cosmeticlikeDao = require('../daos/cosmeticlikeDao');
const cosmeticlikeDto = require('../dtos/cosmeticlikeDto');

/**
 * @swagger
 * /cosmeticlike:
 *   get:
 *     summary: 상품찜 조회
 *     tags:
 *       - 상품찜
 *     description:
 *       "Cid: 화장품 id (필수) <br>
 *       Uid: 유저 id (필수)"
 *     parameters:
 *       - name: Cid
 *         description: 화장품 id
 *         in: query
 *         required: true
 *         type: integer
 *       - name: Uid
 *         description: 유저 id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const getCosmeticLike = async (req, res) => {
    try {
        const request = cosmeticlikeDto.fromRequest_get(req);
        const cosmeticlike = await cosmeticlikeDao.Get(request.Cid, request.Uid);
        res.status(200).json(cosmeticlike);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /cosmeticlike:
 *   post:
 *     summary: 상품찜 등록
 *     tags:
 *       - 상품찜
 *     description:
 *       "Cid: 화장품 id (필수) <br>
 *       Uid: 유저 id (필수)"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Cid:
 *                 type: integer
 *               Uid:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const createCosmeticLike = async (req, res) => {
    try {
        const request = cosmeticlikeDto.fromRequest_create(req);
        const cosmeticlike = await cosmeticlikeDao.Create(request.Cid, request.Uid);
        res.status(200).json(cosmeticlike);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /cosmeticlike:
 *   delete:
 *     summary: 상품찜 삭제
 *     tags:
 *       - 상품찜
 *     description:
 *       "Cid: 화장품 id (필수) <br>
 *       Uid: 유저 id (필수)"
 *     parameters:
 *       - name: Cid
 *         description: 화장품 id
 *         in: query
 *         required: true
 *         type: integer
 *       - name: Uid
 *         description: 유저 id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const deleteCosmeticLike = async (req, res) => {
    try {
        const request = cosmeticlikeDto.fromRequest_get(req);
        const cosmeticlike = await cosmeticlikeDao.Delete(request.Cid, request.Uid);
        res.status(200).json(cosmeticlike);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { getCosmeticLike, createCosmeticLike, deleteCosmeticLike };
