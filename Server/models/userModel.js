import mongoose from 'mongoose'


const userSchema = new mongoose.userSchema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,  },
    creditBalance:{
        type:Number,
        default:5
    }
});

const userModel=mongoose.model.user || mongoose.model("user",userSchema)


export default userModel