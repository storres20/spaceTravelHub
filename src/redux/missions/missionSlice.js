/* eslint-disable camelcase */
/* eslint-disable max-len */
// missionSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions... types
const GET_MISSIONS = 'spaceTravelHub/missions/GET_MISSIONS';
const JOIN_MISSIONS = 'spaceTravelHub/missions/JOIN_MISSIONS';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    // do reducer stuff
    // GET missions from the API
    case `${GET_MISSIONS}/fulfilled`:
      return action.payload;
    // Implement mission joining
    case JOIN_MISSIONS: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        } if (mission.reserved) {
          return { ...mission, reserved: false };
        }
        return { ...mission, reserved: true };
      });
      return newState; }
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
  /* 'mission_id', 'mission_name', 'description'; */

  const redux = result.map(({ mission_id, mission_name, description }) => ({ mission_id, mission_name, description }));

  return redux;
}); /* getMissions - createAsyncThunk - API */

export function joinMissions(obj) {
  return { type: JOIN_MISSIONS, payload: obj };
} /* joinMissions */
