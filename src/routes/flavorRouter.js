const router = require("express").Router();
const flavorService = require("../services/flavorService");

const service = new flavorService();

router.get('/', async(req, res)=>{
    try {
        const color = await service.getFlavor();
        res.status(200).json(color)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;