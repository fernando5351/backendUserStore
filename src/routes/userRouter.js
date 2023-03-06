const router = require("express").Router();

const UserService = require("../services/userService");
const validatorHandler = require("../middlewares/validatorHandler");
const { createUserSchema, loginSchema, getUserSchema } = require("../schemas/userSchema");

const service = new UserService();

router.post('/', validatorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const data = req.body;
            const newUser = await service.create(data);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
)

router.post('/login', validatorHandler(loginSchema, 'body'),
    async(req, res, next)=>{
        try {
            const data = req.body;
            const login = await service.login(data);
            res.status(200).json(login);
        } catch (err) {
            next(err)
        }
    }
)

router.delete("/:id", validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await service.deleteUser(id);
            res.status(201).json(user);
        } catch (error) {
            next(error)
        }
    }
)
module.exports = router;