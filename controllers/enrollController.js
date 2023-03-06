const enrollDao = require('../daos/enrollDao');
const enrollDto = require('../dtos/enrollDto');

/**
 * @swagger
 * /enroll:
 *   post:
 *     summary: 상품 등록요청 등록
 *     tags:
 *       - 상품 등록
 *     description:
 *       "
 *       category: 제품 카테고리(필수)<br>
 *       title: 제품 명 (필수) <br>
 *       brand: 브랜드 명 (필수) <br>
 *       image1: 이미지 주소 (선택) <br>
 *       image2: 이미지 주소 (선택) <br>
 *       image3: 이미지 주소 (선택)"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *               title:
 *                 type: string
 *               brand:
 *                 type: string
 *               image1:
 *                 type: string
 *               image2:
 *                 type: string
 *               image3:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const createEnroll = async (req, res) => {
    try {
        const request = enrollDto.fromRequest_create(req);
        const enroll = await enrollDao.Create(request.category, request.title, request.brand, request.image1, request.image2, request.image3);
        res.status(200).json(enroll);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { createEnroll };
