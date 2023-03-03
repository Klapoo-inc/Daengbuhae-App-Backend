const ingredientDao = require('../daos/ingredientDao');
const ingredientDto = require('../dtos/ingredientDto');
const cosmeticDto = require("../dtos/cosmeticDto");
const cosmeticDao = require("../daos/cosmeticDao");

/**
 * @swagger
 * /ingredient/get:
 *   post:
 *     summary: 화장품 성분 정보 조회
 *     tags:
 *       - 성분
 *     description:
 *       "Cid: 화장품 id (필수) <br>
 *       결과는 성분 정보 리스트"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Cid:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const getIngredients = async (req, res) => {
    try {
        const request = ingredientDto.fromRequest_get(req);
        const ingredients = await ingredientDao.get(request.Cid);
        let ingredientsDto = ingredients;
        ingredientsDto.data = ingredients.data.map(ingredientDto.fromDb_get);
        res.status(200).json(ingredientsDto);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /ingredient/search:
 *   post:
 *     summary: 성분 검색
 *     tags:
 *       - 성분
 *     description:
 *       "title <br>
 *       Iid <br>
 *       page: int / 기본값 1 <br>
 *       limit: int / 기본값 10"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               page:
 *                 type: integer
 *                 default: 1
 *               limit:
 *                 type: integer
 *                 default: 10
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const searchIngredient = async (req, res) => {
    try {
        const request = ingredientDto.fromRequest_search(req);
        const ingredients = await ingredientDao.search(request.title !== undefined ? request.title : "", request.page? request.page : 1, request.limit? request.limit : 10);
        const ingredientsDto = {
            total: ingredients.total,
        }
        ingredientsDto.data = ingredients.data.map(ingredientDto.fromDb_search);
        res.status(200).json(ingredientsDto);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { getIngredients, searchIngredient };
