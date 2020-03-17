const express = require("express");
const routes = express.Router();

const User = require("./Models/User");

routes.post("/", async (req, res) => {
  const { nome, sobrenome, ano } = req.body;
  const user = await User.create({ nome, sobrenome, ano });
  res.json({ user });
});

module.exports = routes;
