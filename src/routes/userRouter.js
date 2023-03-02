const router = require("express").Router();

const UserService = require("../services/userService");
const validatorHandler = require("../middlewares/validatorHandler");
const { createUserSchema, updateUserSchema, getUserSchema } = require("../schemas/userSchema");

const service = new UserService();

router.post('/', validatorHandler(createUserSchema, 'body'),
    async (res, res, next)=>{
        try {
            const body = req.body;
            const newUser = await service.create(body);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
)

module.exports = router;