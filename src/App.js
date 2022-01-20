import React from 'react';
import './App.css';
import Poem from './components/Poem'

function App() {
  return (
    <div className="App">
      <header>
        <p>love-letters-and-poetry</p>
        <p>data from <a href='https://poetrydb.org/index.html' >poetrydb.org</a></p>
      </header>
      <div className='title'>
        <h1><span className='love'>Love</span> me, <span className='not'>Love me</span> not</h1>
        <h2> poems to inspire your next love or not love letter.</h2>
      </div>
      <Poem />
    </div>
  );
}

export default App;