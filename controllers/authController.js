import User from "../models/userModel.js";

export const create = async( req, res) => {
    try{
          const newUser = new User(req.body);
          const {email} = newUser;

          const userExist = await User.findOne({email});
          if(userExist){
            return res.status(400).json({message : "El usuario ya existe"});
          }
          const savedData = await newUser.save();
          //res.status(200).json(savedData);
          res.status(200).json({message: "Usuario creado exitosamente."});
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
    }
};

export const getAllUsers = async( req, res) => {
  try {
         const userData = await User.find();
         if(!userData || userData.lenght === 0) {
             return res.status(404).json({message: "La información del Usuario no puede ser encontrada."});
         }
        res.status(200).json(userData);
      } catch (error) {
        res.status(500).json ({ errorMessage: error.message});
  }
};

export const getUserById = async( req, res) => {
  try {
          const id = req.params.id;
          const userExist = await User.findById(id);
          if(!userExist){
            return res.status(404).json({message: "Usuario no encontrado"});
          }
       res.status(200).json(userExist);   
  } catch (error) {
      res.status(500).json ({ errorMessage: error.message });
  }
};

export const update = async ( req, res) => {
  try {
     const id = req.params.id;
     const userExist = await User.findById(id);
     if (!userExist) {
      return res.status(404).json({ message: "Usuario no encontrado"});
     }
     const updateData = await User.findByIdAndUpdate(id, req.body, {
      new:true,
     });
     //res.status(200).json(updateData);
     res.status(200).json({message: "Usuario actualizado exitosamente"});
  } catch (error) {
    res.status(500).json ({ errorMessage: error.message });
 }
};

export const deleteUser = async (req, res) => {
  try {
     const id = req.params.id;
     const userExist = await User.findById(id);
     if (!userExist){
       return res.status(404).json({ message: "Usuario no encontrado"});
     }
     await User.findByIdAndDelete(id);
     res.status(200).json({message:"Usuario eliminado correctamente"});
     } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};