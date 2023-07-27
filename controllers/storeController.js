const storeDao = require('../daos/storeDao')
const storeDto = require('../dtos/storeDto')

/**
 * @swagger
 * /store:
 *   post:
 *     summary: store등록
 *     tags:
 *       - store
 *     description:
 *       "
 *       name: 상호명,
 *       token: token,
 *       delivery_fee: 기본 배송비,
 *       free_delivery: 무료배송기준,
 *       refund_fee: 환불배송비
 *
 *       "
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               token:
 *                 type: string
 *               delivery_fee:
 *                 type: integer
 *               free_delivery:
 *                 type: integer
 *               refund_fee:
 *                 type: integer
 *
 *
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const createStore = async (req, res) => {
    try {
        const request =storeDto.fromRequest_create(req);
        const enroll = await storeDao.Create(request);
        res.status(200).json(enroll);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
module.exports = { createStore};
