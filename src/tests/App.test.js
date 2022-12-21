import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
// Redux
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
// ****
import App from '../App';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
