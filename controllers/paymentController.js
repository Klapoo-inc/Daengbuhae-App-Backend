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
 *       Uid: userid, \n
 *       Aid: addressid, \n
 *       imp_uid: iamport 결제id \n
 *       merchant_uid: iamport 주문id \n
 *       price: 결제금액 \n
 *       products: 제품 [{PDid: ㅁㅁ, quentity: ㅁㅁ, Storeid: ㅁㅁ, price:ㅁㅁ}] \n
 *       delivery_fee: 배송비 \n
 *       payMethod: 결제방법 \n
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
 *               delivery_fee:
 *                 type: integer
 *               payMethod:
 *                 type: string
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
        const product_num = products.length
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
            const deliveryPaymentDetailList = await Promise.all(keylist.map(async (e)=> {
                const deliveryReq = deliveryDto.fromRequest_create({...req,...productDict[e][0]});
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
/**
 * @swagger
 * /payment/user:
 *   get:
 *     summary: 각 유저의 payment 정보 조회
 *     tags:
 *       - payment
 *     description:
 *       "Uid: user id (필수)"
 *     parameters:
 *       - name: Uid
 *         description: user id
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const searchPaymentByUser = async (req, res) => {
    try {
        const request = paymentDetailDto.fromRequest_get_by_user(req);
        const user = await paymentDetailDao.SearchByUser(request.Uid);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
/**
 * @swagger
 * /payment:
 *   get:
 *     summary: payment 정보조회
 *     tags:
 *       - payment
 *     description:
 *       "PMDid: paymentDetail id (필수)"
 *     parameters:
 *
 *       - name: PMDid
 *         description: paymentDetail id
 *         in: query
 *         required: true
 *         type: int
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

const getPayment = async (req, res) => {
    try {
        const request = paymentDetailDto.fromRequest_get(req);
        const user = await paymentDetailDao.Get(request);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

/**
 * @swagger
 * /payment:
 *   put:
 *     summary: payment 업데이트
 *     tags:
 *       - payment
 *     description:
 *       "
 *       PMDid: 결제아이디
 *       state: 변경할 state
 *
 *       "
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PMDid:
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
const updatePaymentDetail = async (req, res) =>{
    try {
        const request = paymentDetailDto.fromRequest_update(req);
        console.log(request)
        const user = await paymentDetailDao.Update(request);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}
module.exports = {createPayment, searchPaymentByUser, getPayment, updatePaymentDetail};