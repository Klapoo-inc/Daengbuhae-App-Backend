
const versionCheck = async (req, res) => {
    try {
        const appversion={
            android: '1',
            ios:'1'
        }
        const version = req.body.version
        const device = req.body.device
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