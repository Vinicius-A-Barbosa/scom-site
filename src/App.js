import React from 'react';
//import KilometersPage from './Features/KilometersPage/KilometersPage';
import TrainsPage from './Features/TrainsPage/TrainsPage';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="menu">
      </div>
      <div className="page">
        <div className="content">
          <TrainsPage />
        </div>
      </div>
    </div>
  );
}

export default App;
