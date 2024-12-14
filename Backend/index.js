import express, { urlencoded } from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())




app.get("/",(req,res)=>{
res.status(200).send({message:"welcome to home"})
})


app.use('/user',userRoutes)





export default app