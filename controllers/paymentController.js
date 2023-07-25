const paymentDao = require('../daos/paymentDao')
const paymentDto = require('../dtos/paymentDto')
const iamport = require('./iamport/iamport')
const deliveryDao = require('../daos/deleveryDao')
const deliveryDto = require('../dtos/deliveryDto')
const paymentDetailDao = require('../daos/paymentDetailDao')
const paymentDetailDto = require('../dtos/paymentDetailDto')


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
 *       products: 제품 [{PDid: ㅁㅁ, quentity: ㅁㅁ, Storeid: ㅁㅁ}]
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
        const paymentreq = paymentDto.fromRequest_create(req);
        const check = await iamport.paymentCheck(paymentreq)
        const products = req.body.products
        if(check['success']){
        // if(true){
            const productDict = {}
            //해당하는 storeId의 개수를 찾는과정
            for(const key in products){
                const p = products[key]
                const keylist = Object.keys(productDict)
                console.log(keylist, p)
                if(keylist.includes(p['Storeid'].toString())){
                    productDict[p['Storeid']].push(p)
                }else{
                    productDict[p['Storeid']] = [p]
                }
            }
            const keylist = Object.keys(productDict)
            const payment = await paymentDao.Create(paymentreq)
            const deliveryReq = deliveryDto.fromRequest_create(req);
            const deliveryPaymentDetailList = await Promise.all(keylist.map(async (e)=> {
                return  await deliveryDao.Create(deliveryReq).then(async (delivery)=>{
                    const paymentDetailList = await Promise.all(productDict[e].map(  (product)=>{
                        const paymentDetailReq = paymentDetailDto.fromRequest_create({...req, ...product});
                        return   paymentDetailDao.Create(paymentDetailReq, payment.PMid, delivery.delivery_uid)
                    }))
                    return {delivery: delivery, paymentDetailList: paymentDetailList}
                })
            }))
            res.status(200).json({payment: payment, deliveryPaymentDetailList:deliveryPaymentDetailList});
        }else{
            res.status(400).json({ message: 'Internal Server Error', check:check });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = {createPayment};