const CosmeticRating = require("../models/cosmeticratingModel");
const Get = async (Cid) => {
    const data = await CosmeticRating.findByPk(Cid);
    if (!data) {
        return null;
    }else{
        return data;
    }
};
const Create = async (Cid ) => {
    const result = await CosmeticRating.create({
        Cid: Cid
    });
    return result;
};

const Update = async (req, i) => {
    const data = await CosmeticRating.findByPk(req.Cid);
    if (!data) {
        const data = await Create(req.Cid)
        let input={}
        if(req.rating==1){
            input={rating1:1}
        }else if(req.rating==2) {
            input={rating2:1}
        }else if(req.rating==3) {
            input={rating3:1}
        }else if(req.rating==4) {
            input={rating4:1}
        }else if(req.rating==5) {
            input={rating5:1}
        }
        return await data.update({...input, avr:req.rating})
    }else{
        const total = 1*data.rating1+2*data.rating2+3*data.rating3+4*data.rating4+5*data.rating5+req.rating*i
        const count = data.rating1+data.rating2+data.rating3+data.rating4+data.rating5+i
        const avr = total/count
        data.avr = avr
        console.log(data.dataValues)
        if(req.rating==1){

            data.rating1 +=i
            const result = await data.update(data.dataValues)
            return result
        }else if(req.rating==2){
            data.rating2 +=i
            const result = await data.update(data.dataValues)
            return result
        }
        else if(req.rating==3){
            data.rating3 +=i
            const result = await data.update(data.dataValues)
            return result
        }
        else if(req.rating==4){
            data.rating4 +=i
            const result = await data.update(data.dataValues)
            return result
        }
        else if(req.rating==5){
            data.rating5 +=i
            const result = await data.update(data.dataValues)
            return result
        }
    }
};


module.exports = { Get, Update}