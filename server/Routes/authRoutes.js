const { Register, Login } = require("../controllers/AuthControllers");
const { checkUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post('/',checkUser);
router.post("/register", Register);
router.post("/login", Login);

module.exports= router;