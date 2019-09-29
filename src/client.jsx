import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import App from './App';
import reduxStore from './redux';
import { Auth0Provider } from './contexts/auth0';

hydrate(
  <ReduxProvider store={reduxStore}>
    <Auth0Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </ReduxProvider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
