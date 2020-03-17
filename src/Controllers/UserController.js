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
      res.json({ users });
    } catch (error) {
      console.log(error);
      res.json({ msg: "Problemas no servidor" });
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
      res.json({ user });
    } catch (error) {
      console.log(error);
      res.json({ msg: "Problemas no servidor" });
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
      const { nome, sobrenome, ano } = req.body;
      const user = await User.create({ nome, sobrenome, ano });
      res.json({ user });
    } catch (error) {
      console.log(error);
      res.json({ msg: "Problemas no servidor" });
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
      const { nome, sobrenome, ano } = req.body;
      const { userId } = req.params;
      const user = await User.findByIdAndUpdate(
        {
          _id: userId
        },
        {
          nome,
          sobrenome
        },
        {
          new: true
        }
      );
      res.json({ user });
    } catch (error) {
      console.log(error);
      res.json({ msg: "Problemas no servidor" });
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
      const user = await User.findByIdAndDelete({
        _id: userId
      });
      res.json({ msg: "Usuário deletado com sucesso" });
    } catch (error) {
      console.log(error);
      res.json({ msg: "Problemas no servidor" });
    }
  }
};
