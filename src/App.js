import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';

import './styles.css';
import "./Components/styles/global";

import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
