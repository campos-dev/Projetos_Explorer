const knex = require("../database/knex");

class NotesControllers {
  async create(req, res) {
    const { title, description, rating, tags } = req.body;
    const { user_id } = req.params;

    const [note_id] = await knex("notes")
      .where({ user_id })
      .first()
      .insert({ title, description, rating, user_id });

    const insertTags = tags.map((tag) => {
      return {
        note_id,
        user_id,
        name: tag,
      };
    });

    await knex("tags").insert(insertTags);

    return res.json();
  }

  async show(req, res) {
    const { id } = req.params;

    const note = await knex("notes").where({ id }).first();

    return res.json(note);
  }

  async delete(req, res) {
    const { id } = req.params;

    await knex("notes").where({ id }).delete();

    return res.json();
  }

  async index(req, res) {
    const { user_id, title, rating, tags } = req.query;

    let notes;

    if (tags) {
      const filteredTags = tags.split(",").map((tag) => tag.trim());
      notes = await knex("tags")
        .select([
          "notes.id",
          "notes.title",
          "notes.description",
          "notes.rating",
          "notes.user_id",
        ])
        .where({ "notes.user_id": user_id, "notes.rating": rating })
        .whereLike("notes.title", `%${title}%`)
        .whereIn("name", filteredTags)
        .innerJoin("notes", "notes.id", "tags.note_id");
    } else {
      notes = await knex("notes")
        .where({ user_id, rating })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const tagsFromUser = await knex("tags").where({ user_id });
    const notesWithTags = notes.map((note) => {
      const tagsFromNotes = tagsFromUser.filter(
        (tag) => note.id === tag.note_id
      );
      return { ...notes, tags: tagsFromNotes };
    });

    return res.json(notesWithTags);
  }
}

module.exports = NotesControllers;
