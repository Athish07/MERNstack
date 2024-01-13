import React, { createContext, useReducer } from "react";

// Initial state
const initialState = {
  workouts: [],
};

// Reducer function
const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        ...state,
        workouts: action.payload,
      };
    case 'CREATE_WORKOUT':
      return {
        ...state,
        workouts: [action.payload, ...state.workouts],
      };
    case 'DELETE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

// Create context
export const WorkoutsContext = createContext();

// Context provider component
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, initialState);

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
