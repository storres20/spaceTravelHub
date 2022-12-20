import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rockets from './rockets/rocketSlice';
import missions from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets,
    missions,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
