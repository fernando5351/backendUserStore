const router = require("express").Router();
const decorationService = require("../services/decorationService");

const service = new decorationService();

router.get('/', async(req, res)=>{
    try {
        const color = await service.getDecoration();
        res.status(200).json(color)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;