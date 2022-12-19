// missionSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions... types
const GET_MISSIONS = 'spaceTravelHub/missions/GET_MISSIONS';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    // do reducer stuff
    // GET missions from the API
    case `${GET_MISSIONS}/fulfilled`:
      return action.payload;
    default: return state;
  }
}

// Action Creators
export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const getMissionsUrl = 'https://api.spacexdata.com/v3/missions';
  const response = await fetch(getMissionsUrl,
    {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
      },
    });
  const result = await response.json();

  /* Keep some keys from Array of Objects and remove the rest of them */
  const keysToKeep = ['mission_id', 'mission_name', 'description'];

  const redux = (array) => array.map((o) => keysToKeep.reduce((acc, curr) => {
    acc[curr] = o[curr];
    return acc;
  }, {}));

  return redux(result);
}); /* getMissions - createAsyncThunk - API */
