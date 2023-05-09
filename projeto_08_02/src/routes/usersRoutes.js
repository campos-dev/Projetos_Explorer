const usersRoutes = require("express").Router();
const UsersControllers = require("../controllers/usersControllers");
const usersControllers = new UsersControllers();

usersRoutes.post("/", usersControllers.create);
usersRoutes.put("/:id", usersControllers.update);

module.exports = usersRoutes;
