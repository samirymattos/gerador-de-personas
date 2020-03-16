const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();
let port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.use(bodyParser.json());

const users = {};

app.get("/", (req, res) => {
  res.json({ users });
});
