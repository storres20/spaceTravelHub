import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Rockets from '../pages/Rockets';
// import moviesReducer from '../redux/movies/movies';
import rockets from '../redux/rockets/rocketSlice';

// configureStore
const createTestStore = () => {
  const store = configureStore({
    reducer: {
      rockets,
    },
  });

  return store;
};
export default createTestStore;

// Test
describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = createTestStore();

    // Create a redux store
    component = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
  });

  test('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
