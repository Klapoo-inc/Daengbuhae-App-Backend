const basketDao = require('../daos/basketDao')
const basketDto = require('../dtos/basketDto')

/**
 * @swagger
 * /basket:
 *   post:
 *     summary: basket 등록
 *     tags:
 *       - basket
 *     description:
 *       "
 *       Uid: userid,
 *       products: 제품 [{PDid: ㅁㅁ, quentity: ㅁㅁ}]
 *
 *       "
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Uid:
 *                 type: string
 *               products:
 *                 type: array
 *                 items:
 *                    type: object
 *
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const createBasket = async (req, res) => {
    try {
        const request = basketDto.fromRequest_create(req);
        const enroll = await basketDao.Create(request);
        res.status(200).json(enroll);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
/**
 * @swagger
 * /basket/user:
 *   post:
 *     summary: user basket조회
 *     tags:
 *       - basket
 *     description:
 *       "Uid: user id (필수)"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Uid:
 *                 type: string
 *               page:
 *                 type: integer
 *               limit:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const getuserbasket = async (req, res) => {
    try {
        const request = basketDto.fromRequest_search(req);
        const pet = await basketDao.Search(request);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { createBasket,  getuserbasket};
