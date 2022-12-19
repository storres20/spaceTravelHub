import { configureStore } from '@reduxjs/toolkit';
import rockets from './rockets/rocketSlice';
import missions from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets,
    missions,
  },
});

export default store;
