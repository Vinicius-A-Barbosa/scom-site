import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import getStoreAndPersistor from './Setup/Store/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import * as serviceWorker from './serviceWorker';

const { persistor, store } = getStoreAndPersistor();

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={<div>loading...</div>} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
