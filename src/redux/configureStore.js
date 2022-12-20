import { configureStore } from '@reduxjs/toolkit';
import rockets from './rockets/rocketSlice';
import missions from './missions/missionSlice';
import logger from 'redux-logger'

const reducer = {
  rockets,
  missions,
}

const store = configureStore(
  reducer,
  applyMiddleware(logger)
);

export default store;
