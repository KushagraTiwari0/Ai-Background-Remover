import mongoose from 'mongoose'
const connectDB=async()=>{

    mongoose.connection.on('connected',()=>{
        console.log("Database Connected")
    })
    await mongoose.connect(`${process.env.MongoDb_Uri}/ai-bg-removal`)
}
export default connectDB