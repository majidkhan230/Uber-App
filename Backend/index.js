import express, { urlencoded } from 'express'
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
res.status(200).send({message:"welcome to home"})
})

export default app