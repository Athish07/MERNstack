import {useEffect}from 'react'
//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/workoutForm'
import UseWorkoutsContext from '../hooks/useWorkoutsContext'
const Home=()=>{

    const {workouts,dispatch}=UseWorkoutsContext();
    useEffect(()=>{
       
        const fetchworkouts=async()=>
        {
            const response=await fetch('/api/workouts')
            const json =await response.json()
            
            if(response.ok)
            {
                dispatch({ type: 'SET_WORKOUTS', payload: json })

            }
        }

        fetchworkouts()
    },[dispatch]) //depedency array

    return(

        <div className='home'>
            <div className='workouts'>
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>

            <div>
              <WorkoutForm />
            </div>
        </div>
    )
}
export default Home

