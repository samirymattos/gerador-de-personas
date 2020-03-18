const Persona = require("../Models/Persona");

module.exports = {
  async list(req, res) {
    try {
      const personas = await Persona.find();
      if (personas === null) {
        return res.status(401).json({ error: "Nenhuma persona cadastrado" });
      }
      return res.status(200).json({ personas });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Problemas no servidor" });
    }
  },
  async show(req, res) {
    try {
      const { personaId } = req.params;
      const persona = await Persona.find({
        _id: personaId
      });
      if (persona.lenght === 0) {
        return res.status(401).json({ error: "Persona não cadastrado" });
      }
      return res.status(200).json({ persona });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Problemas no servidor" });
    }
  },
  async create(req, res) {
    try {
      const {
        owner,
        name,
        sex,
        age,
        role,
        where_works,
        schooling,
        communication_means,
        dreams,
        problems,
        company_help,
        company_workers,
        company_role,
        image
      } = req.body;
      const persona = await Persona.create({
        owner,
        name,
        sex,
        age,
        role,
        where_works,
        schooling,
        communication_means,
        dreams,
        problems,
        company_help,
        company_workers,
        company_role,
        image
      });
      return res.status(201).json({ persona });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Problemas no servidor" });
    }
  },
  async update(req, res) {
    try {
      const {
        name,
        sex,
        age,
        role,
        where_works,
        schooling,
        communication_means,
        dreams,
        problems,
        company_help,
        company_workers,
        company_role,
        image
      } = req.body;
      const { personaId } = req.params;

      const personaExist = await Persona.findById({ _id: personaId });

      if (!personaExist) {
        return res.status(401).json({ error: "Não existe esta persona" });
      }
      const persona = await Persona.findByIdAndUpdate(
        {
          _id: personaId
        },
        {
          name,
          sex,
          age,
          role,
          where_works,
          schooling,
          communication_means,
          dreams,
          problems,
          company_help,
          company_workers,
          company_role,
          image
        },
        {
          new: true
        }
      );
      return res.status(200).json({ persona });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Problemas no servidor" });
    }
  },
  async delete(req, res) {
    try {
      const { personaId } = req.params;
      const personaExist = await Persona.findById({ _id: personaId });
      if (!personaExist) {
        return res.status(401).json({ error: "Persona não cadastrada." });
      }
      const persona = await Persona.findByIdAndDelete({
        _id: personaId
      });
      return res.status(200).json({ msg: "Persona deletada com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Problemas no servidor" });
    }
  }
};
