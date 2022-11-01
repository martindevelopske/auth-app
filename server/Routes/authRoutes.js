const { Register, Login } = require("../controllers/AuthControllers");

const router = require("express").Router();

router.post('/',(req,res)=>res.send("heloo"));
router.post("/register", Register);
router.post("/login", Login);

module.exports= router;