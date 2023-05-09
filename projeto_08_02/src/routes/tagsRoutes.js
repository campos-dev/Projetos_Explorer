const tagsRoutes = require("express").Router();
const TagsControllers = require("../controllers/tagsControllers");
const tagsControllers = new TagsControllers();

tagsRoutes.get("/:user_id", tagsControllers.index);

module.exports = tagsRoutes;
