import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MyProfile from '../pages/MyProfile';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <MyProfile />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
