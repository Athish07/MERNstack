require('dotenv').config();
var express=require("express")
const mongoose=require('mongoose')
//express app
const app=express()
const workout=require('./routes/workouts')
//middleware
app.use(express.json())
app.use((req,res,next)=>
{
   console.log(req.path,res.method)
    next()
})
//routes


app.use('/api/workouts',workout)


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  
    app.listen(process.env.PORT,()=>
    {
        console.log("on the poart 4000")
    
    })
    
})
.catch((error)=>
{
    console.log(error)
})
//poart liserner