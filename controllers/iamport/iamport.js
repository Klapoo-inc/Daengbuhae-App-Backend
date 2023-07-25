const axios = require('axios');
require('dotenv').config();

const { IMP_KEY , IMP_SECRET } = process.env;
const url = 'https://api.iamport.kr'
const getToken= async ()=> {
    const token =  await axios.post(url+ '/users/getToken',{
        imp_key: IMP_KEY,
        imp_secret: IMP_SECRET
    }).catch((e)=>{
    })
    return token.data['response']['access_token']

};

const getPayment= async (imp_uid)=> {
    const token = await getToken()
    axios.defaults.headers.common['Authorization'] = token
    const payment = await axios.get(url+'/payments/'+imp_uid).catch((e)=>{
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
            if(status==='ready'){
                return {success: false, message: '브라우저 창 이탈, 가상계좌 발급 완료 등 미결제 상태', status: status}
            }else if(status==='paid'){
                return {success: true, message: '결제가 성공적으로 이뤄졌습니다.', status: status}
            }else if(status==='failed'){
                return {success: false, message: '신용카드 한도 초과, 체크카드 잔액 부족, 브라우저 창 종료 또는 취소 버튼 클릭 등 결제실패 상태', status: status}
            }else{
                return {success: false, message: '옳바르지 않은 상태입니다.', status: status}
            }
        }
    }

}

module.exports = {getToken, getPayment, paymentCheck}