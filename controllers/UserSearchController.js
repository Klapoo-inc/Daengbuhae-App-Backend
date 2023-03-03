const Dao = require('../daos/usersearchDao');
const Dto = require('../dtos/usersearchDto');

/**
 * @swagger
 * /usersearch:
 *   get:
 *     summary: lastsearch
 *     tags:
 *       - usersearch
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

const getUserSearch = async (req, res) => {
    try {
        const request = Dto.fromRequest_all_get(req);
        const pet = await Dao.AllGet(request.Uid);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /usersearch:
 *   post:
 *     summary: create last search
 *     tags:
 *       - usersearch
 *     description:
 *       "Sid: 유저 id (필수) <br>
 *       search: search text"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Uid:
 *                 type: string
 *
 *               search:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const createUserSearch = async (req, res) => {
    try {
        const request = Dto.fromRequest_create(req);
        const pet = await Dao.Create(request);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};



/**
 * @swagger
 * /usersearch:
 *   delete:
 *     summary: delete last search
 *     tags:
 *       - usersearch
 *     description:
 *       "Sid: search id (필수)"
 *     parameters:
 *       - name: Sid
 *         description: search id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const deleteUserSearch = async (req, res) => {
    try {
        const request = Dto.fromRequest_delete(req);
        const pet = await Dao.Delete(request.Sid);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};


module.exports = { getUserSearch, createUserSearch, deleteUserSearch};
