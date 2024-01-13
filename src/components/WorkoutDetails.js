// components/WorkoutDetails.js

// import React from 'react';
// import useWorkoutsContext from '../hooks/useWorkoutsContext';

import React from 'react';
import useWorkoutsContext from '../hooks/useWorkoutsContext';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    try {
      const response = await fetch(`/api/workouts/${workout._id}`, {
        method: 'DELETE',
      });

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'DELETE_WORKOUT', payload: workout });
      } else {
        // Handle error, if needed
        console.error(json.error || 'Delete request failed');
      }
    } catch (error) {
      console.error('An error occurred during the delete request', error);
    }
  };

  return (
    <Card className="workout-details">
      <CardContent>
        <Typography variant="h6">{workout.title}</Typography>
        <Typography>
          <strong>Load (Kg):</strong> {workout.load}
        </Typography>
        <Typography>
          <strong>Reps:</strong> {workout.reps}
        </Typography>
        <Typography>{workout.createAt}</Typography>
      </CardContent>
      <IconButton onClick={handleClick} color="error">
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};

export default WorkoutDetails;
