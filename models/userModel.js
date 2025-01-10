import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String, 
        required: true
    },
    Number:{
      type: Number,
      required:true
    },
})

<<<<<<< HEAD
export default mongoose.model("Users", userSchema)
=======
export default mongoose.model("Users", userSchema)
>>>>>>> c7cdeac (retoque)
