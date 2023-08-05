const { Router } = require("express");
const UsersController = require("../controllers/UsersControllers");
const controller = new UsersController(require("../services/usersService"));
const createUserValidation = require("../middlewares/createUserValidation");

const router = Router();

router.get("/users", controller.getUsers);

router.get("/users/:id", controller.getUserById);

router.post("/users", createUserValidation, controller.createUser);

module.exports = router;
