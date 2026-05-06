const router = require("express").Router();

const { registerValidation, LoginValidation } = require("../Middlewares/AuthValidation");
const { register, login } = require("../controllers/AuthController");

router.post('/register', registerValidation, register);
router.post('/login', LoginValidation, login);

module.exports = router;