const mongoose = require("mongoose");

const PersonaSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    name: {
      type: String,
    },
    sex: {
      type: String,
    },
    age: {
      type: String,
    },
    role: {
      type: String,
    },
    where_works: {
      type: String,
    },
    schooling: {
      type: String,
    },
    communication_means: {
      type: String,
    },
    dreams: {
      type: String,
    },
    problems: {
      type: String,
    },
    company_help: {
      type: String,
    },
    company_workers: {
      type: String,
    },
    company_role: {
      type: String,
    },
    image: {
      type: String,
    }
  },  
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Persona", PersonaSchema);
