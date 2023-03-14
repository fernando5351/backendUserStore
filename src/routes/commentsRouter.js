const router = require("express").Router();
const serviceComentarios = require("../services/comentariosService");

const service = new serviceComentarios();

router.post('/', async(req, res)=>{
    const data = req.body;
    const response = await service.createComentario(data);
    res.status(200).json(response);
});

router.get('/', async(req, res)=>{
    const response = await service.getComments();
    res.status(200).json(response);
})

module.exports = router;