const axios = require('axios');

const url = 'https://api.iamport.kr'
const getToken= async ()=> {
    const token = await axios.post(url+ '/users/getToken',{
        imp_key: '7160254718542464',
        imp_secret: 'sF8Qpb9blDuPNOkMhDZ5pOJgG6XkF0H76ZxTTO32WujrlIj9A09Wd25XsTyxrTAESmSgZFTkYKJc4Z6l'
    })
    return token

};

const getPayment= async ()=> {
    const token = await getToken();
    if(token){
        const payment = await axios.get(url+ '/payments/'+'imp_190137338046',{headers:{
                Authorization: token.data['access_token']
            }}).then((res)=>{
            console.log(res.data)
        }).catch((e)=>{console.log(e)})
        return payment
    }


};


module.exports = {getToken, getPayment}