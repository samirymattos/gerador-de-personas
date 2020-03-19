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
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

app.use(bodyParser.json());

app.use("/", require("./src/routes.js"));
