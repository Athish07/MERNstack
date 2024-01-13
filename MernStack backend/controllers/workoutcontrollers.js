const { default: mongoose } = require('mongoose');
const workout=require('../modules/workoutmodule')

//get all workout
const getallworkouts=async(req,res)=>
{
    const allworkouts= await workout.find({}).sort({createdAt: -1});

    res.status(200).json(allworkouts);

}

//single workout

const getsingleworkout=async(req,res)=>
{
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'NO such workout'})
    }
    const {id}=req.params
    
    const workout=await workout.findById(id);
    
    if(!workout)
    {
        return res.status(404).json('no match found');
    }
    else
    {
        res.status(200).json(workout);
    }
}

//create new workout

const createworkout=async (req,res)=>
{
    //add doc to db
    const{title,load,reps}=req.body
    
    try{
        const workouts=await workout.create({title,load,reps}) //await because it is async
        res.status(200).json(workouts)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete workout

const deleteWorkout= async(req,res)=>
{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'NO such workout'})
    }

    const delworkout =await workout.findOneAndDelete({_id: id})

    if(!delworkout)
    {
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(delworkout)
}
//update workout

const updateWorkout=async(req,res)=>
{
   const {id}=req.params;

   if(!mongoose.Types.ObjectId.isValid(id))
   {
      return res.status(404).json({error: 'No such workout'})
      
    }

   const updateworkout=await workout.findByIdAndUpdate({_id: id},
    {
        ...req.body
    })
   if(!updateworkout)
   {
       return res.status(404).json({error: 'No such workout'})
   }

   res.status(200).json(updateworkout);

}

module.exports={
    createworkout,
    getallworkouts,
    getsingleworkout,
    deleteWorkout,
    updateWorkout
}