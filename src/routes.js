const express = require("express");
const routes = express.Router();

const UserController = require("./Controllers/UserController");

/*
  $$$$$$\  $$$$$$$\  $$\   $$\ $$$$$$$\              $$\                                                                   $$\                     
$$  __$$\ $$  __$$\ $$ |  $$ |$$  __$$\             $$ |                                                                  \__|                    
$$ /  \__|$$ |  $$ |$$ |  $$ |$$ |  $$ |       $$$$$$$ | $$$$$$\        $$\   $$\  $$$$$$$\ $$\   $$\  $$$$$$\   $$$$$$\  $$\  $$$$$$\   $$$$$$$\ 
$$ |      $$$$$$$  |$$ |  $$ |$$ |  $$ |      $$  __$$ |$$  __$$\       $$ |  $$ |$$  _____|$$ |  $$ | \____$$\ $$  __$$\ $$ |$$  __$$\ $$  _____|
$$ |      $$  __$$< $$ |  $$ |$$ |  $$ |      $$ /  $$ |$$$$$$$$ |      $$ |  $$ |\$$$$$$\  $$ |  $$ | $$$$$$$ |$$ |  \__|$$ |$$ /  $$ |\$$$$$$\  
$$ |  $$\ $$ |  $$ |$$ |  $$ |$$ |  $$ |      $$ |  $$ |$$   ____|      $$ |  $$ | \____$$\ $$ |  $$ |$$  __$$ |$$ |      $$ |$$ |  $$ | \____$$\ 
\$$$$$$  |$$ |  $$ |\$$$$$$  |$$$$$$$  |      \$$$$$$$ |\$$$$$$$\       \$$$$$$  |$$$$$$$  |\$$$$$$  |\$$$$$$$ |$$ |      $$ |\$$$$$$  |$$$$$$$  |
 \______/ \__|  \__| \______/ \_______/        \_______| \_______|       \______/ \_______/  \______/  \_______|\__|      \__| \______/ \_______/

0.0 CRUD de usuários
*/

routes.get("/user", UserController.list);
routes.get("/user/:userId", UserController.show);
routes.post("/user", UserController.create);
routes.put("/user/:userId", UserController.update);
routes.delete("/user/:userId", UserController.delete);

module.exports = routes;
