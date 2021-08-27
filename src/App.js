import React from 'react';
import KilometersPage from './Features/KilometersPage/KilometersPage';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="menu">
      </div>
      <div className="page">
        <div className="content">
          <KilometersPage />
        </div>
      </div>
    </div>
  );
}

export default App;
