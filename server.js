const express = require("express");

const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const user = {};

app.get("/", (req, res) => {
  res.send("Usando get");
});

app.post("/", (req, res) => {
  res.send("Usando post");
});

app.put("/", (req, res) => {
  res.send("Usando put");
});

app.delete("/", (req, res) => {
  res.send("Usando delete");
});
