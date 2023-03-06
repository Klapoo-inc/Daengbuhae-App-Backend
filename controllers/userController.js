const userDao = require('../daos/userDao');
const userDto = require('../dtos/userDto');

/**
 * @swagger
 * /user:
 *   post:
 *     summary: 유저등록
 *     tags:
 *       - 유저
 *     description:
 *       "Uid: 유저 id (필수) <br>
 *       ads: 광고동의 <br>
 *       provider: 로그인제공자 <br>
 *       email: 이메일 <br>
 *       token: firebase토큰 <br>
 *
 *
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
 *               ads:
 *                 type: integer
 *               provider:
 *                 type: string
 *               email:
 *                 type: string
 *               token:
 *                 type: string
 *
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const createuser = async (req, res) => {
    try {
        const request = userDto.fromRequest_create(req);
        const CosmeticReview = await userDao.Create(request);
        res.status(200).json(CosmeticReview);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
/**
 * @swagger
 * /user:
 *   put:
 *     summary: 유저 수정
 *     tags:
 *       - 유저
 *     description:
 *       "
 *       Uid: 유저 id (필수) <br>
 *       ads: 광고동의 <br>
 *       email: 이메일 <br>
 *       token: firebase토큰 <br>
 *
 *
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
 *               ads:
 *                 type: integer
 *               email:
 *                 type: string
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const updateuser = async (req, res) => {
    try {
        const request = userDto.fromRequest_update(req);
        const pet = await userDao.Update(request, req.Uid);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
module.exports = {createuser, updateuser};