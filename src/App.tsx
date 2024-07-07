import React from 'react';
import './App.css';
import { ShowCard } from './containers/ShowCard';
import data from './const/data';

function App() {
  return (
    <div className="App">
      <ShowCard data={data} />
    </div>
  );
}

export default App;


