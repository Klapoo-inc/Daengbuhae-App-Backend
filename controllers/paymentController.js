const paymentDao = require('../daos/paymentDao')
const paymentDto = require('../dtos/paymentDto')
const iamport = require('./iamport/iamport')


/**
 * @swagger
 * /payment:
 *   post:
 *     summary: payment 등록
 *     tags:
 *       - payment
 *     description:
 *       "
 *       Uid: userid,
 *       Aid: addressid,
 *       imp_uid: iamport 결제id
 *       merchant_uid: iamport 주문id
 *       price: 결제금액
 *       products: 제품 [{PDid: ㅁㅁ, quentity: ㅁㅁ}]
 *
 *       "
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                    type: object
 *               Aid:
 *                 type: integer
 *               Uid:
 *                 type: string
 *               imp_uid:
 *                 type: string
 *               merchant_uid:
 *                 type: string
 *               amount:
 *                 type: integer
 *
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const createPayment = async (req, res) => {
    try {
        const request = paymentDto.fromRequest_create(req);
        const check = await iamport.paymentCheck(request)
        if(check['success']){
            const payment = await paymentDao.Create(request);

            res.status(200).json(payment);
        }else{
            res.status(400).json({ message: 'Internal Server Error', check:check });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = {createPayment};