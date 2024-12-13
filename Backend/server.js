import connectToDb from './db/db.js'
import app from './index.js'
import dotenv from "dotenv"

dotenv.config()


const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server is sucessfully established on ${PORT}`)
    connectToDb();
})