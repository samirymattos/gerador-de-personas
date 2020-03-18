const express = require("express");
const routes = express.Router();

const UserController = require("./Controllers/UserController");
const PersonaController = require("./Controllers/PersonaController");

// CRUD de usuários

routes.get("/user", UserController.list);
routes.get("/user/:userId", UserController.show);
routes.post("/user", UserController.create);
routes.put("/user/:userId", UserController.update);
routes.delete("/user/:userId", UserController.delete);

// CRUD de personas

routes.get("/persona", PersonaController.list);
routes.get("/persona/:personaId", PersonaController.show);
routes.post("/persona", PersonaController.create);
routes.put("/persona/:personaId", PersonaController.update);
routes.delete("/persona/:personaId", PersonaController.delete);

module.exports = routes;
