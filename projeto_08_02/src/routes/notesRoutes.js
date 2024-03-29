const notesRoutes = require("express").Router();
const NotesControllers = require("../controllers/notesControllers");
const notesControllers = new NotesControllers();

notesRoutes.post("/:user_id", notesControllers.create);
notesRoutes.get("/:id", notesControllers.show);
notesRoutes.get("/", notesControllers.index);
notesRoutes.delete("/:id", notesControllers.delete);

module.exports = notesRoutes;
