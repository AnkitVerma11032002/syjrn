import mongoose from 'mongoose'

export const connectToMongo=async()=>{
try {
   const conn= await mongoose.connect("mongodb+srv://ankitverma11032002:r4qi.pgDWyp9BhD@ankbit.1we3kvi.mongodb.net/SyntaxJourney")
//    const conn= await mongoose.connect("mongodb://127.0.0.1:27017/DB")SyntaxJourney

   console.log("Database Connected")
} catch (error) {
    console.log(error)
}
}
