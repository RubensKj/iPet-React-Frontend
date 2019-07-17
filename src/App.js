import React from 'react';
import Routes from './routes';

import './styles.css';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      {/* { (isAuthenticated() ? (<HeaderAuthenticated />) : (<Header />)) } */}
      <Header />
      <Routes />
    </div>
  );
}

export default App;
