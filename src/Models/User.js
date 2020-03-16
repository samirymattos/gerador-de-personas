const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String
  },
  ano: {
    type: Number
  }
});

module.exports = mongoose.model("User", UserSchema);
