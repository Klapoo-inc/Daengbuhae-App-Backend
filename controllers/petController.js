const petDao = require('../daos/petDao');
const petDto = require('../dtos/petDto');

/**
 * @swagger
 * /pet:
 *   get:
 *     summary: 애완동물 정보 조회
 *     tags:
 *       - 애완동물
 *     description:
 *       "Pid: 펫 id (필수)"
 *     parameters:
 *       - name: Pid
 *         description: 펫 id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const getPet = async (req, res) => {
    try {
        const request = petDto.fromRequest_get(req);
        const pet = await petDao.Get(request.Pid);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /pet/all:
 *   get:
 *     summary: 유저 애완동물 전체 조회
 *     tags:
 *       - 애완동물
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

const getAllPet = async (req, res) => {
    try {
        const request = petDto.fromRequest_all_get(req);
        const pet = await petDao.AllGet(request.Uid);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /pet:
 *   post:
 *     summary: 애완동물 등록
 *     tags:
 *       - 애완동물
 *     description:
 *       "Uid: 유저 id (필수) <br>
 *       birth: 생일 (필수) <br>
 *       gender: 성별 <br>
 *       src: 이미지 <br>
 *       kind: 종 <br>
 *       name: 이름 <br>
 *       neutering: 중성화 <br>
 *       vaccination: 백신 <br>
 *       weight: 무게 <br>
 *       allergic: 알레르기 <br>
 *       ill: 질병 <br>
 *       bath: 목욕"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Uid:
 *                 type: string
 *               birth:
 *                 type: string
 *               gender:
 *                 type: string
 *               src:
 *                 type: string
 *               kind:
 *                 type: string
 *               name:
 *                 type: string
 *               neutering:
 *                 type: boolean
 *               vaccination:
 *                 type: boolean
 *               weight:
 *                 type: boolean
 *               allergic:
 *                 type: object
 *               ill:
 *                 type: object
 *               bath:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const createPet = async (req, res) => {
    try {
        const request = petDto.fromRequest_create(req);
        const pet = await petDao.Create(request);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /pet:
 *   put:
 *     summary: 애완동물 수정
 *     tags:
 *       - 애완동물
 *     description:
 *       "Pid: 펫 id (필수) <br>
 *       Uid: 유저 id (필수) <br>
 *       birth: 생일 <br>
 *       gender: 성별 <br>
 *       src: 이미지 <br>
 *       kind: 종 <br>
 *       name: 이름 <br>
 *       neutering: 중성화 <br>
 *       vaccination: 백신 <br>
 *       weight: 무게 <br>
 *       allergic: 알레르기 <br>
 *       ill: 질병 <br>
 *       bath: 목욕"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Pid:
 *                 type: integer
 *               Uid:
 *                 type: string
 *               birth:
 *                 type: string
 *               gender:
 *                 type: string
 *               src:
 *                 type: string
 *               kind:
 *                 type: string
 *               name:
 *                 type: string
 *               neutering:
 *                 type: boolean
 *               vaccination:
 *                 type: boolean
 *               weight:
 *                 type: boolean
 *               allergic:
 *                 type: object
 *               ill:
 *                 type: object
 *               bath:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const updatePet = async (req, res) => {
    try {
        const request = petDto.fromRequest_update(req);
        const pet = await petDao.Update(request.Pid, request);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /pet:
 *   delete:
 *     summary: 애완동물 삭제
 *     tags:
 *       - 애완동물
 *     description:
 *       "Pid: 펫 id (필수)"
 *     parameters:
 *       - name: Pid
 *         description: 펫 id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const deletePet = async (req, res) => {
    try {
        const request = petDto.fromRequest_delete(req);
        const pet = await petDao.Delete(request.Pid);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /pet/main:
 *   get:
 *     summary: 유저 메인 애완동물 정보 조회
 *     tags:
 *       - 애완동물
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

const getMainPet = async (req, res) => {
    try {
        const request = petDto.fromRequest_main_get(req);
        const pet = await petDao.MainGet(request.Uid);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /pet/main:
 *   put:
 *     summary: 유저 메인 애완동물 수정
 *     tags:
 *       - 애완동물
 *     description:
 *       "Pid: 펫 id (필수) <br>
 *       Uid: 유저 id (필수) <br>"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Pid:
 *                 type: integer
 *               Uid:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const updateMainPet = async (req, res) => {
    try {
        const request = petDto.fromRequest_main_update(req);
        const pet = await petDao.MainUpdate(request.Pid, request.Uid);
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = { getPet, getAllPet, createPet, updatePet, deletePet, getMainPet, updateMainPet };
