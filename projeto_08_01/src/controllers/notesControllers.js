const knex = require("../database/knex");

class NotesControllers {
  async create(req, res) {
    const { title, description, tags, links } = req.body;
    const { user_id } = req.params;

    const [note_id] = await knex("notes").insert({
      user_id,
      title,
      description,
    });

    const insertTags = tags.map((tag) => {
      return {
        note_id,
        user_id,
        name: tag,
      };
    });

    await knex("tags").insert(insertTags);

    const insertLinks = links.map((link) => {
      return {
        note_id,
        url: link,
      };
    });

    await knex("links").insert(insertLinks);

    return res.json();
  }

  async show(req, res) {
    const { id } = req.params;

    const note = await knex("notes").where({ id });

    return res.json(note);
  }

  async delete(req, res) {
    const { id } = req.params;
    await knex("notes").where({ id }).delete();
    return res.json();
  }

  async index(req, res) {
    const { title, tags, user_id } = req.query;

    let notes;

    if (tags) {
      const filteredTags = tags.split(",").map((tag) => tag.trim());
      notes = await knex("tags")
        .select(["notes.title", "notes.user_id", "notes.id"])
        .where("notes.user_id", user_id)
        .whereLike("notes.title", `%${title}%`)
        .whereIn("name", filteredTags)
        .innerJoin("notes", "notes.id", "tags.note_id")
        .orderBy("created_at");
    } else {
      notes = await knex("notes")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("created_at");
    }

    const tagsFromUser = await knex("tags").where({ user_id });
    const notesFromTags = notes.map((note) => {
      const tagsFromNotes = tagsFromUser.filter(
        (tag) => note.id === tag.note_id
      );

      return { ...notes, tags: tagsFromNotes };
    });

    return res.json(notesFromTags);
  }
}

module.exports = NotesControllers;
