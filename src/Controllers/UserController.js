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
      const users = await User.find();
      if (users === null) {
        return res.status(401).json({ error: "Nenhum usuário cadastrado" });
      }
      return res.status(200).json({ users });
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
      const { userId } = req.params;
      const user = await User.find({
        _id: userId
      });
      if (user.lenght === 0) {
        return res.status(401).json({ error: "Usuário não cadastrado" });
      }
      return res.status(200).json({ user });
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
      const { nome, idade, email, cargo } = req.body;
      const userExist = await User.findOne({ email });
      if (userExist !== null) {
        return res
          .status(401)
          .json({ error: "Já existe um usuário com este e-mail" });
      }
      const user = await User.create({ nome, idade, email, cargo });
      return res.status(201).json({ user });
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
      const { nome, idade, email, cargo } = req.body;
      const { userId } = req.params;

      const userExist = await User.findById({ _id : userId });
      
      if (!userExist) {
        return res
          .status(401)
          .json({ error: "Não existe este usuário" });
      }
      const user = await User.findByIdAndUpdate(
        {
          _id: userId
        },
        {
          nome,
          idade,
          email,
          cargo
        },
        {
          new: true
        }
      );
      return res.status(200).json({ user });
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
      const { userId } = req.params;
      const userExist = await User.findById({ _id: userId });
      if (!userExist) {
        return res.status(401).json({ error: "Usuário não cadastrado." });
      }
      const user = await User.findByIdAndDelete({
        _id: userId
      });
      return res.status(200).json({ msg: "Usuário deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Problemas no servidor" });
    }
  }
};
