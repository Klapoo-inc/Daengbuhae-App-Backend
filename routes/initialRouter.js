const express = require('express');


const router = express.Router();


const initial = async (req, res) => {
    try {
        res.status(200).json({'sucess':'sucess'});
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
router.get('/', initial);

module.exports = router;