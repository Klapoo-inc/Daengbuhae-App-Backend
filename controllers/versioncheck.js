
const versionCheck = async (req, res) => {
    try {
        const appversion={
            android: '8',
            ios:'7'
        }
        const version = req.query.version
        const device = req.query.device
        if(appversion[device]==version){
            const result=true
            res.status(200).json(result);
        }else{
            const result=false
            res.status(200).json(result);
        }

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports = {versionCheck}