const router = require("express").Router();
const sizeService = require("../services/sizeService.js");

const service = new sizeService();

router.get('/', async(req, res)=>{
    try {
        const color = await service.getSize();
        res.status(200).json(color)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;