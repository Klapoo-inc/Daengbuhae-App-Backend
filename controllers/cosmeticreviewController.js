const CosmeticReviewDao = require('../daos/CosmeticReviewDao');
const CosmeticReviewDto = require('../dtos/CosmeticReviewDto');
const cosmeticDao = require('../daos/cosmeticDao');
const cosmeticDto = require('../dtos/cosmeticDto');

// /**
//  * @swagger
//  * /CosmeticReview:
//  *   get:
//  *     summary: 상품찜 조회
//  *     tags:
//  *       - 상품찜
//  *     description:
//  *       "Uid: 유저 id (필수) <br>
//  *       Cid: 화장품 id (선택) <br>
//  *       page: 1 (선택) <br>
//  *       limit: 10 (선택) <br>
//  *       Uid만 입력시에 page와 limit이 필요함 (상품 페이지에서는 Uid, Cid 함께 사용 / 마이페이지에서 Uid, page, limit 사용)"
//  *     parameters:
//  *       - name: Uid
//  *         description: 유저 id
//  *         in: query
//  *         required: true
//  *         type: string
//  *       - name: Cid
//  *         description: 화장품 id
//  *         in: query
//  *         required: false
//  *         type: integer
//  *       - name: page
//  *         in: query
//  *         required: false
//  *         type: integer
//  *       - name: limit
//  *         in: query
//  *         required: false
//  *         type: integer
//  *     responses:
//  *       200:
//  *         description: Success
//  *       500:
//  *         description: Internal Server Error
//  */
//
// const getCosmeticReview = async (req, res) => {
//     try {
//         const request = CosmeticReviewDto.fromRequest_get(req);
//         let CosmeticReview = await CosmeticReviewDao.Get(request.Cid, request.Uid, request.page? request.page : 1, request.limit? request.limit : 10);
//         CosmeticReview.data = CosmeticReview.data.map(CosmeticReviewDto.fromDb_get);
//         CosmeticReview.data = await Promise.all(CosmeticReview.data.map(async(value, index, array) => {
//             const cosmetic = cosmeticDto.fromDb_get(await cosmeticDao.get(value.Cid));
//             return { ...value, ...cosmetic };
//         }));
//         res.status(200).json(CosmeticReview);
//     } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error', error });
//     }
// };

/**
 * @swagger
 * /CosmeticReview:
 *   post:
 *     summary: 화장품리뷰 등록
 *     tags:
 *       - 화장품리뷰
 *     description:
 *       "Cid: 화장품 id (필수) <br>
 *       Uid: 유저 id (필수) <br>
 *       Pid: 펫 id (필수) <br>
 *       rating1: 상품평(필수) <br>
 *       rating2: 사용성 (필수) <br>
 *       content: 리뷰 본문(필수) <br>
 *       image1: 리뷰 이미지 <br>
 *       image2: 리뷰 이미지 <br>
 *       image3: 리뷰 이미지 <br>
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
 *               Cid:
 *                 type: integer
 *               Uid:
 *                 type: string
 *               Pid:
 *                 type: integer
 *               rating1:
 *                 type: integer
 *               rating2:
 *                 type: integer
 *               content:
 *                 type: integer
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

const createCosmeticReview = async (req, res) => {
    try {
        const request = CosmeticReviewDto.fromRequest_create(req);
        const CosmeticReview = await CosmeticReviewDao.Create(request);
        res.status(200).json(CosmeticReview);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /CosmeticReview:
 *   delete:
 *     summary: 화장품리뷰 삭제
 *     tags:
 *       - 화장품리뷰
 *     description:
 *       "Rid: 리뷰 id (필수)"
 *     parameters:
 *
 *       - name: Rid
 *         description: 리뷰 id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const deleteCosmeticReview = async (req, res) => {
    try {
        const request = CosmeticReviewDto.fromRequest_delete(req);
        const CosmeticReview = await CosmeticReviewDao.Delete(request.Rid);
        res.status(200).json(CosmeticReview);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { createCosmeticReview, deleteCosmeticReview };
