const router = require("express").Router();
const colorService = require("../services/colorService");

const service = new colorService();

router.get('/', async(req, res)=>{
    try {
        const color = await service.getColors();
        res.status(200).json(color)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;