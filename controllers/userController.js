const userDao = require('../daos/userDao');
const userDto = require('../dtos/userDto');
const petDto = require("../dtos/petDto");
const petDao = require("../daos/petDao");

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
        const user = await userDao.Create(request);
        res.status(200).json(user);
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
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const updateuser = async (req, res) => {
    try {
        const request = userDto.fromRequest_update(req);
        const pet = await userDao.Update(request, req.body.Uid);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /user:
 *   delete:
 *     summary: 유저 삭제
 *     tags:
 *       - 유저
 *     description:
 *       "Uid: 유저 id (필수)"
 *     parameters:
 *       - name: Uid
 *         description: 유저 id
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const deleteUser = async (req, res) => {
    try {
        const request = userDto.fromRequest_delete(req);
        const user = await userDao.Delete(request.Uid);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
/**
 * @swagger
 * /user:
 *   get:
 *     summary: 유저 정보 조회
 *     tags:
 *       - 유저
 *     description:
 *       "Uid: user id (필수)"
 *     parameters:
 *       - name: Uid
 *         description: user id
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const getUser = async (req, res) => {
    try {
        const request = userDto.fromRequest_get(req);
        const user = await userDao.Get(request.Uid);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
module.exports = {createuser, updateuser, deleteUser, getUser};