// useWorkoutsContext.js
import { useContext } from 'react';
import { WorkoutsContext } from '../context/WorkoutContext';

const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  // Uncomment the following block if you want to throw an error when context is undefined
  // if (!context) {
  //   throw new Error("WorkoutsContext is undefined");
  // }

  return context;
};

export default useWorkoutsContext;
