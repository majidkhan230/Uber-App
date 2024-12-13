import mongoose from "mongoose";

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("sucessfully connected to db")
  } catch (error) {
    console.error({ message: "failed to connect to db", error: error.message });
  }
}


export default connectToDb;