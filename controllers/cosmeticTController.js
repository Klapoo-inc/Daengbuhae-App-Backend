const Dao = require('../daos/cosmeticTDao');
const Dto = require('../dtos/cosmeticTDto');
/**
 * @swagger
 * /tracking/cosmetic:
 *   post:
 *     summary: 화장품 접속기록 등록
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
 *               Cid:
 *                 type: integer
 *               state:
 *                 type: string
 *
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const creatCosmeticTracking = async (req, res) => {
    try {
        const request = Dto.fromRequest_create(req);
        const result = await Dao.Create(request);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
/**
 * @swagger
 * /tracking/cosmetic/countbydate:
 *   post:
 *     summary: 날자별 검색기록 초회 등록
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

const CountByDateCosmeticTracking = async (req, res) => {
    try {
        const request = Dto.fromRequest_create(req);
        const result = await Dao.CountByDate(request);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
module.exports ={creatCosmeticTracking, CountByDateCosmeticTracking}