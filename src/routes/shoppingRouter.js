const router = require("express").Router();
const validatorHandler = require("../middlewares/validatorHandler");
const { createShoppingSchema, getSchopping } = require("../schemas/shopingSchema");
const shoppingService = require("../services/shoppingService");

const service = new shoppingService();

router.post('/', validatorHandler(createShoppingSchema, 'body'),
    async (req, res, next)=>{
        try {
            const data = req.body;
            const shop = await service.create(data);
            res.status(200).json(shop)
        } catch (error) {
            next(error)
        }
    }
);

router.get("/:id", validatorHandler(getSchopping, 'params'),
    async(req, res, next)=>{
        try {
            const { id } = req.params;
            const shop = await service.getShopping(id);
            res.status(200).json(shop);
        } catch (error) {
            next(error);
        }
    }
)

module.exports = router;