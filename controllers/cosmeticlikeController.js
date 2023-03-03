const cosmeticlikeDao = require('../daos/cosmeticlikeDao');
const cosmeticlikeDto = require('../dtos/cosmeticlikeDto');
const cosmeticDao = require('../daos/cosmeticDao');
const cosmeticDto = require('../dtos/cosmeticDto');

/**
 * @swagger
 * /cosmeticlike:
 *   get:
 *     summary: 상품찜 조회
 *     tags:
 *       - 상품찜
 *     description:
 *       "Uid: 유저 id (필수) <br>
 *       Cid: 화장품 id (선택) <br>
 *       page: 1 (선택) <br>
 *       limit: 10 (선택) <br>
 *       Uid만 입력시에 page와 limit이 필요함 (상품 페이지에서는 Uid, Cid 함께 사용 / 마이페이지에서 Uid, page, limit 사용)"
 *     parameters:
 *       - name: Uid
 *         description: 유저 id
 *         in: query
 *         required: true
 *         type: string
 *       - name: Cid
 *         description: 화장품 id
 *         in: query
 *         required: false
 *         type: integer
 *       - name: page
 *         in: query
 *         required: false
 *         type: integer
 *       - name: limit
 *         in: query
 *         required: false
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
        let cosmeticlike = await cosmeticlikeDao.Get(request.Cid, request.Uid, request.page? request.page : 1, request.limit? request.limit : 10);
        cosmeticlike.data = cosmeticlike.data.map(cosmeticlikeDto.fromDb_get);

        cosmeticlike.data = await Promise.all(cosmeticlike.data.map(async(value, index, array) => {
            const cosmetic = cosmeticDto.fromDb_get(await cosmeticDao.get(value.Cid));
            return { ...value, ...cosmetic };
        }));
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
 *                 type: string
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
        const request = cosmeticlikeDto.fromRequest_delete(req);
        const cosmeticlike = await cosmeticlikeDao.Delete(request.Cid, request.Uid);
        res.status(200).json(cosmeticlike);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { getCosmeticLike, createCosmeticLike, deleteCosmeticLike };
