const addressDao = require('../daos/addressDao')
const addressDto = require('../dtos/addressDto')

/**
 * @swagger
 * /address:
 *   post:
 *     summary: basket 등록
 *     tags:
 *       - address
 *     description:
 *       "
 *       Uid: userid,
 *       name: 수령자 이름,
 *       address: 수령지 주소,
 *       addressdetail: 수령지 상세 주소,
 *       postnum: 우편번호,
 *       phonenumber: 수령자 번호
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
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               addressdetail:
 *                 type: string
 *               postnum:
 *                 type: integer
 *               phonenumber:
 *                 type: string
 *
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const createAddress = async (req, res) => {
    try {
        const request =addressDto.fromRequest_create(req);
        const enroll = await addressDao.Create(request);
        res.status(200).json(enroll);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
/**
 * @swagger
 * /address/user:
 *   post:
 *     summary: user address조회
 *     tags:
 *       -  address
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

const getuseraddresss = async (req, res) => {
    try {
        const request = addressDto.fromRequest_search(req);
        const pet = await addressDao.Search(request);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { createAddress,  getuseraddresss};
