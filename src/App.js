import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Love Me, Love Me Not</h1>
        <h2> poems to inspire your next love or not love letter.</h2>
        <button>Love Me</button>
        <button>Love Me Not</button>
      </div>
      
      <div className='poemContainer'>
        <h3>Sonnet 12 - Indeed this very love which is my boast"</h3>
        <h3>By Elizabeth Barrett Browning</h3>
        <p>
        "Indeed this very love which is my boast,",
      "And which, when rising up from breast to brow,",
      "Doth crown me with a ruby large enow",
      "To draw men's eyes and prove the inner cost,—",
      "This love even, all my worth, to the uttermost,",
      "I should not love withal, unless that thou",
      "Hadst set me an example, shown me how,",
      "When first thine earnest eyes with mine were crossed,",
      "And love called love. And thus, I cannot speak",
      "Of love even, as a good thing of my own:",
      "Thy soul hath snatched up mine all faint and weak,",
      "And placed it by thee on a golden throne,—",
      "And that I love (O soul, we must be meek!)",
      "Is by thee only, whom I love alone."
        </p>
      </div>
    </div>
  );
}

export default App;