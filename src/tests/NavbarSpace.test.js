import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavbarSpace from '../components/NavbarSpace';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavbarSpace />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
