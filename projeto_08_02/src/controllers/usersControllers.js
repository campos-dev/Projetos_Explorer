const AppError = require("../utils/appError");
const knex = require("../database/knex");
const { hash, compare } = require("bcryptjs");

class UsersControllers {
  async create(req, res) {
    const { name, email, password } = req.body;

    const user = await knex("users").where({ email }).first();

    if (user) {
      throw new AppError("This email was already registered.");
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({ name, email, password: hashedPassword });

    return res.json();
  }

  async update(req, res) {
    const { name, email, old_password, password } = req.body;
    const { id } = req.params;

    const user = await knex("users").where({ id }).first();

    if (!user) {
      throw new AppError("User not found.");
    }

    const checkIfEmailAlreadyUsed = await knex("users")
      .where({ email })
      .first();

    if (checkIfEmailAlreadyUsed && checkIfEmailAlreadyUsed.id !== id) {
      throw new AppError("This email was already registered.");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.updated_at = knex.fn.now();

    if (password & !old_password) {
      throw new AppError("Old password must be provided.");
    }

    if (password & old_password) {
      const passwordMatched = await compare(old_password, user.password);

      if (!passwordMatched) {
        throw new AppError("Password is incorrect.");
      }

      const hashedPassword = await hash(password, 8);

      user.password = hashedPassword;
    }

    await knex("users").where({ id }).update(user);

    return res.json();
  }
}

module.exports = UsersControllers;
