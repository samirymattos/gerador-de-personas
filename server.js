const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();
let port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

mongoose.connect(
  "mongodb+srv://api-node2:@123456@cluster0-bo2c8.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(bodyParser.json());

const users = {};

const User = require("./src/Models/User");

app.post("/", async (req, res) => {
  const { nome, sobrenome, ano } = req.body;
  const user = await User.create({ nome, sobrenome, ano });
  res.json({ user });
});
