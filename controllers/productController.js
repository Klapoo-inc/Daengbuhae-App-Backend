const productDao = require('../daos/ProductDao')
const productDto = require('../dtos/productDto')
const petDto = require("../dtos/petDto");
const petDao = require("../daos/petDao");

/**
 * @swagger
 * /product:
 *   post:
 *     summary: product 등록
 *     tags:
 *       - product
 *     description:
 *       "
 *       title: 제품 명 (필수) <br>
 *       src: 옵션상품 이미지<br>
 *       Storeid: 상점id<br>
 *       price: 가격<br>
 *       saleprice: 할인가격<br>
 *       state: 판매상태<br>
 *       quentity: 제고수량<br>
 *       Cid: 화장품id<br>
 *
 *       "
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               src:
 *                 type: string
 *               Storeid:
 *                 type: integer
 *               price:
 *                 type: integer
 *               saleprice:
 *                 type: integer
 *               state:
 *                 type: integer
 *               quentity:
 *                 type: integer
 *               Cid:
 *                 type: integer
 *
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const createProduct = async (req, res) => {
    try {
        const request = productDto.fromRequest_create(req);
        console.log(request)
        const enroll = await productDao.Create(request);
        res.status(200).json(enroll);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
/**
 * @swagger
 * /product/cosmetic:
 *   get:
 *     summary: 화장품옵션조회
 *     tags:
 *       - product
 *     description:
 *       "Cid: cosmetic id (필수)"
 *     parameters:
 *       - name: Cid
 *         description: cosmetic id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const getCosmeitc = async (req, res) => {
    try {
        const request = productDto.fromRequest_cosmetic_get(req);
        console.log(request)
        const pet = await productDao.GetCosmetic(request);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { createProduct,  getCosmeitc};
