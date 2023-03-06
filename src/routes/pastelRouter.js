const router = require("express").Router();
const pastelService = require("../services/pastelService.js");

const service = new pastelService();

router.get('/', async(req, res)=>{
    try {
        const color = await service.getPastel();
        res.status(200).json(color)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;