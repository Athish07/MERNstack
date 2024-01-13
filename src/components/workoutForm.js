import React, { useState } from "react";
import useWorkoutsContext from '../hooks/useWorkoutsContext';

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState(0);
  const [reps, setReps] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || load <= 0 || reps <= 0) {
      setError('Please fill in all fields with valid values.');
      return;
    }

    const workout = { title, load, reps };

    try {
      setLoading(true);

      const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const json = await response.json();
        throw new Error(json.error || 'Something went wrong.');
      }

      const newWorkout = await response.json();
      setTitle('');
      setLoad(0);
      setReps(0);
      setError(null);
      dispatch({ type: 'CREATE-WORKOUT', payload: newWorkout });
    } catch (error) {
      setError(error.message || 'An error occurred while adding the workout.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h1>Add new workout</h1>

      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Load (kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      {error && <div className="error">{error}</div>}

      <button type="submit" disabled={loading}>
        {loading ? 'Adding workout...' : 'Add workout'}
      </button>
    </form>
  );
};

export default WorkoutForm;
