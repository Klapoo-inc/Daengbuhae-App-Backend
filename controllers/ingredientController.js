const ingredientDao = require('../daos/ingredientDao');
const ingredientDto = require('../dtos/ingredientDto');

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

module.exports = { getIngredients };
