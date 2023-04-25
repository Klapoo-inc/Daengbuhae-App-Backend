const cosmeticDao = require('../daos/cosmeticDao');
const cosmeticDto = require('../dtos/cosmeticDto');
const cosmeticingredientDto = require('../dtos/cosmeticingredientDto')
const cosmeticingredientDao = require('../daos/cosmeticingredientDao')
const searchT = require('./searchTController')

/**
 * @swagger
 * /cosmetic/search:
 *   post:
 *     summary: 화장품 검색
 *     tags:
 *       - 화장품
 *     description:
 *       "title: string / 기본값 undefined (화장품 명 혹은 브랜드 명) <br>
 *       BCategory: string / 기본값 undefined <br>
 *       SCategory: string / 기본값 undefined <br>
 *       NInhibition: bool / 기본값 undefined  <br>
 *       NLimit: bool / 기본값 undefined <br>
 *       Allergic: bool / 기본값 undefined <br>
 *       filter: list(string) / 기본값 undefined <br>
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
 *               BCategory:
 *                 type: string
 *               SCategory:
 *                 type: string
 *               NInhibition:
 *                 type: boolean
 *               NLimit:
 *                 type: boolean
 *               Allergic:
 *                 type: boolean
 *               filter:
 *                 type: array
 *                 items:
 *                   type: string
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

const searchCosmetics = async (req, res) => {
    try {
        const request = cosmeticDto.fromRequest_search(req);
        if(1) {
            await searchT.creatSearchTracking({
                body: {
                    Uid: request.Uid,
                    query: request
                }
            })
        }
        const cosmetics = await cosmeticDao.search(request.title !== undefined ? request.title : "", request.BCategory, request.SCategory, request.NInhibition, request.NLimit, request.Allergic, request.filter, request.page? request.page : 1, request.limit? request.limit : 10);
        const cosmeticsDto = {
            total: cosmetics.total,
        }
        cosmeticsDto.data = cosmetics.data.map(cosmeticDto.fromDb_search);
        res.status(200).json(cosmeticsDto);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /cosmetic/get:
 *   post:
 *     summary: 화장품 상세조회
 *     tags:
 *       - 화장품
 *     description:
 *       "Cid : cosmetic ID 값 (필수)"
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

const getCosmetic = async (req, res) => {
    try {
        const request = cosmeticDto.fromRequest_get(req);
        const cosmeticDetail = await cosmeticDao.get(request.Cid);
        const cosmeticDetailDto = cosmeticDto.fromDb_get(cosmeticDetail);
        res.status(200).json(cosmeticDetailDto);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /cosmetic/create:
 *   post:
 *     summary: 화장품등록
 *     tags:
 *       - 화장품
 *     description:
 *       "Cid: cosmetic id<br>
 *       title: cosmetic title<br>
 *       brand: cosmetic brand <br>
 *       SCategory: cosmetic small category<br>
 *       BCategory: cosmetic big category<br>
 *       src: cosmetic image src<br>
 *       NInhibition: 제한성분 유무<br>
 *       NLimit: 금지성분 유무<br>
 *       Allergic: 알러지 유발성분유무<br>
 *       CountFunctional: 기능성 성분 종류, 개수<br>
 *       CountRating: 위험 유의 등 성분 개수<br>
 *       CupangSrc: 쿠팡 구매링크<br>
 *       CountColor: 성분 위험도 색 개수<br>
 *       PPH: pph해당 성분 유무<br>
 *       ingredients: 화장품 성분 리스트
 *       "
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *
 *               Cid:
 *                  type: integer
 *               title:
 *                 type: string
 *               brand:
 *                 type: string
 *               SCategory:
 *                  type: string
 *               BCategory:
 *                  type: string
 *               src:
 *                  type: string
 *                  default: null
 *               CoupangSrc:
 *                  type: string
 *                  default: null
 *               NInhibition:
 *                  type: boolean
 *               NLimit:
 *                  type: boolean
 *               Allergic:
 *                  type: boolean
 *               PPH:
 *                  type: boolean
 *               CountFunctional:
 *                  type: object
 *               CountRating:
 *                  type: object
 *               CountColor:
 *                  type: object
 *               ingredients:
 *                  type: array
 *                  items:
 *                      type: integer
 *
 *
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const createCosmetic = async (req, res) => {
    try {
        const request = cosmeticDto.fromRequest_create(req);
        const pet = await cosmeticDao.Create(request);
        const requestingredient = cosmeticingredientDto.fromRequest_create(req)
        const cosmeticingredient = cosmeticingredientDao.Create(requestingredient)
        res.status(200).json({'cosmetic': pet, 'cosmeticingredient':cosmeticingredient});
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
/**
 * @swagger
 * /cosmetic:
 *   put:
 *     summary: 화장품 업데이트
 *     tags:
 *       - 화장품
 *     description:
 *       "Cid: cosmetic id<br>
 *       title: cosmetic title<br>
 *       brand: cosmetic brand <br>
 *       SCategory: cosmetic small category<br>
 *       BCategory: cosmetic big category<br>
 *       src: cosmetic image src<br>
 *       NInhibition: 제한성분 유무<br>
 *       NLimit: 금지성분 유무<br>
 *       Allergic: 알러지 유발성분유무<br>
 *       CountFunctional: 기능성 성분 종류, 개수<br>
 *       CountRating: 위험 유의 등 성분 개수<br>
 *       CupangSrc: 쿠팡 구매링크<br>
 *       CountColor: 성분 위험도 색 개수<br>
 *       PPH: pph해당 성분 유무<br>
 *       ingredients: 화장품 성분 리스트
 *       "
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *
 *               Cid:
 *                  type: integer
 *               title:
 *                 type: string
 *               brand:
 *                 type: string
 *               SCategory:
 *                  type: string
 *               BCategory:
 *                  type: string
 *               src:
 *                  type: string
 *                  default: null
 *               CoupangSrc:
 *                  type: string
 *                  default: null
 *               NInhibition:
 *                  type: boolean
 *               NLimit:
 *                  type: boolean
 *               Allergic:
 *                  type: boolean
 *               PPH:
 *                  type: boolean
 *               CountFunctional:
 *                  type: object
 *               CountRating:
 *                  type: object
 *               CountColor:
 *                  type: object
 *               ingredients:
 *                  type: array
 *                  items:
 *                      type: integer
 *
 *
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const updatecosmetic = async (req, res) => {
    try {
        const request = cosmeticDto.fromRequest_create(req);
        const cosmetic = await cosmeticDao.Update(request.Cid, request);
        const requestingredient = cosmeticingredientDto.fromRequest_create(req)
        const cosmeticingredient = cosmeticingredientDao.Create(requestingredient)
        res.status(200).json({'cosmetic': cosmetic, 'cosmeticingredient':cosmeticingredient});
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /cosmetic:
 *   delete:
 *     summary: 화장품 삭제
 *     tags:
 *       - 화장품
 *     description:
 *       "Cid: 화장품 id (필수)"
 *     parameters:
 *       - name: Cid
 *         description: 화장품 id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const deleteCosmetic = async (req, res) => {
    try {
        const request = cosmeticDto.fromRequest_delete(req);
        console.log(request, req.body)
        const pet = await cosmeticDao.Delete(request.Cid);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { searchCosmetics, getCosmetic, createCosmetic, deleteCosmetic, updatecosmetic };
