const Persona = require("../Models/Persona");
const User = require("../Models/User");

module.exports = {
  /*
  $$\       $$\                         $$\     
  $$ |      \__|                        $$ |    
  $$ |      $$\        $$$$$$$\       $$$$$$\   
  $$ |      $$ |      $$  _____|      \_$$  _|  
  $$ |      $$ |      \$$$$$$\          $$ |    
  $$ |      $$ |       \____$$\         $$ |$$\ 
  $$ |      $$ |      $$$$$$$  |        \$$$$  |
  \__|      \__|      \_______/          \____/ 
  */

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

  /*
                  $$\                                           
                  $$ |                                          
   $$$$$$$\       $$$$$$$\         $$$$$$\        $$\  $$\  $$\ 
  $$  _____|      $$  __$$\       $$  __$$\       $$ | $$ | $$ |
  \$$$$$$\        $$ |  $$ |      $$ /  $$ |      $$ | $$ | $$ |
   \____$$\       $$ |  $$ |      $$ |  $$ |      $$ | $$ | $$ |
  $$$$$$$  |      $$ |  $$ |      \$$$$$$  |      \$$$$$\$$$$  |
  \_______/       \__|  \__|       \______/        \_____\____/ 
  */

  async show(req, res) {
    try {
      const { personaId } = req.params;
      const persona = await Persona.find({
        _id: personaId
      });
      const personaExist = await Persona.findById({ _id: personaId });

      if (!personaExist) {
        return res.status(401).json({ error: "Não existe esta persona" });
      }
      return res.status(200).json({ persona });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Problemas no servidor" });
    }
  },

  /*
                                                                    $$\                     
                                                                    $$ |                    
  $$$$$$$\        $$$$$$\         $$$$$$\         $$$$$$\        $$$$$$\          $$$$$$\  
  $$  _____|      $$  __$$\       $$  __$$\        \____$$\       \_$$  _|        $$  __$$\ 
  $$ /            $$ |  \__|      $$$$$$$$ |       $$$$$$$ |        $$ |          $$$$$$$$ |
  $$ |            $$ |            $$   ____|      $$  __$$ |        $$ |$$\       $$   ____|
  \$$$$$$$\       $$ |            \$$$$$$$\       \$$$$$$$ |        \$$$$  |      \$$$$$$$\ 
  \_______|      \__|             \_______|       \_______|         \____/        \_______|
  */

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

      const userExist = await User.findOne({ _id: owner });
      if (userExist === null) {
        return res
          .status(401)
          .json({ error: "Esse usuário não esta cadastrado" });
      }

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

  /*
                                        $$\                         $$\                     
                                        $$ |                        $$ |                    
  $$\   $$\        $$$$$$\         $$$$$$$ |       $$$$$$\        $$$$$$\          $$$$$$\  
  $$ |  $$ |      $$  __$$\       $$  __$$ |       \____$$\       \_$$  _|        $$  __$$\ 
  $$ |  $$ |      $$ /  $$ |      $$ /  $$ |       $$$$$$$ |        $$ |          $$$$$$$$ |
  $$ |  $$ |      $$ |  $$ |      $$ |  $$ |      $$  __$$ |        $$ |$$\       $$   ____|
  \$$$$$$  |      $$$$$$$  |      \$$$$$$$ |      \$$$$$$$ |        \$$$$  |      \$$$$$$$\ 
  \______/       $$  ____/        \_______|       \_______|         \____/        \_______|
                  $$ |                                                                      
                  $$ |                                                                      
                  \__| 
  */

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

  /*
        $$\                       $$\                         $$\                     
        $$ |                      $$ |                        $$ |                    
  $$$$$$$ |       $$$$$$\        $$ |       $$$$$$\        $$$$$$\          $$$$$$\  
  $$  __$$ |      $$  __$$\       $$ |      $$  __$$\       \_$$  _|        $$  __$$\ 
  $$ /  $$ |      $$$$$$$$ |      $$ |      $$$$$$$$ |        $$ |          $$$$$$$$ |
  $$ |  $$ |      $$   ____|      $$ |      $$   ____|        $$ |$$\       $$   ____|
  \$$$$$$$ |      \$$$$$$$\       $$ |      \$$$$$$$\         \$$$$  |      \$$$$$$$\ 
  \_______|       \_______|      \__|       \_______|         \____/        \_______|
  */

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
