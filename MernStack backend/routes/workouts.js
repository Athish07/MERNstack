const express = require('express');
const router=express.Router()
const {
    createworkout,
    getallworkouts,
    getsingleworkout,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutcontrollers')


//Get all workouts

router.get('/',getallworkouts)
//get single worouts

router.get('/:id',getsingleworkout)

//post a new workouts

router.post('/',createworkout);

//delete a workout
router.delete('/:id',deleteWorkout);

//update workout

router.patch('/:id',updateWorkout);

module.exports=router