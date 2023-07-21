const axios = require('axios');
require('dotenv').config();

const { IMP_KEY , IMP_SECRET } = process.env;
const url = 'https://api.iamport.kr'
const getToken= async ()=> {
    const token =  await axios.post(url+ '/users/getToken',{
        imp_key: IMP_KEY,
        imp_secret: IMP_SECRET
    }).catch((e)=>{
        console.log(e)
    })
    return token.data['response']['access_token']

};

const getPayment= async (imp_uid)=> {
    const token = await getToken()
    axios.defaults.headers.common['Authorization'] = token
    const payment = await axios.get(url+'/payments/'+imp_uid).catch((e)=>{
        console.log(e)
    })
    return payment.data['response']
};

const paymentCheck= async (res)=> {
    const amount = res['amount']
    const imp_uid = res['imp_uid']
    const paymentInfo = await getPayment(imp_uid)
    const status = paymentInfo['status']
    if(paymentInfo==null){
        return {success: false, message: '결제 정보가 존재하지 않습니다.'}
    }else{
        if(amount!==paymentInfo['amount']){
            return {success: false, message: '결제 금액이 일치하지 않습니다.'}
        }else{
            return {success: true, message: '결제가 성공적으로 이뤄졌습니다.', status: status}
        }
    }

}

module.exports = {getToken, getPayment, paymentCheck}