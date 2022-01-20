import React from 'react';
import './App.css';
import Poem from './components/Poem'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Love Me, Love Me Not</h1>
        <h2> poems to inspire your next love or not love letter.</h2>
      </div>
      <Poem />
    </div>
  );
}

export default App;