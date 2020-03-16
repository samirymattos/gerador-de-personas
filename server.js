const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.use(bodyParser.json());

const users = {};
// users["SAMIRY"] = {24, 21/06/1995}
app.get("/", (req, res) => {
  res.json({ users });
});

app.post("/", (req, res) => {
  const { nome, sobrenome, idade, nascimento } = req.body;
  users[nome] = { sobrenome, nascimento, idade };
  res.json({ msg: "usuário criado com sucesso" });
});

app.put("/:nome", (req, res) => {
  const { nome } = req.params;
  const { sobrenome, nascimento, idade } = req.body;
  users[nome] = { sobrenome, nascimento, idade };
  res.json({ msg: "usuário alterado com sucesso" });
});

app.delete("/:nome", (req, res) => {
  const { nome } = req.params;
  delete users[nome];
  res.json({ msg: "usuário deletado com sucesso" });
});
