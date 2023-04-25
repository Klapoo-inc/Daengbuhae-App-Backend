const Dao = require('../daos/searchTDao');
const Dto = require('../dtos/searchTDto');
/**
 * @swagger
 * /tracking/search:
 *   post:
 *     summary: 검색기록 등록
 *     tags:
 *       - tracking
 *     description:
 *       "title: title <br>
 *       content: content<br>
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
 *               query:
 *                 type: object
 *
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const creatSearchTracking = async (req, res) => {
    try {
        const request = Dto.fromRequest_create(req);
        const result = await Dao.Create(request);
        // res.status(200).json(result);
    } catch (error) {
        // res.status(500).json({ message: 'Internal Server Error', error });
    }
};
module.exports ={creatSearchTracking}