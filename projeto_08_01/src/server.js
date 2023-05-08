require("express-async-errors");
const AppError = require("./utils/appError");
const express = require("express");
const app = express();
app.use(express.json());
const routes = require("./routes");
const runMigrations = require("./database/sqlite/migrations");

app.use(routes);
runMigrations();

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ status: "error", message: error.message });
  }
  return res
    .status(500)
    .json({ status: "error", message: "Internal server error" });
});

const PORT = 3000;

app.listen(PORT, console.log(`Server is running on port:${PORT}`));
