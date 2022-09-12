import './App.css';
import { Gradient } from 'javascript-color-gradient';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());
  const [userHue, setUserHue] = useState('');
  const [userLum, setUserLum] = useState('');

  return (
    <div className="Layout">
      <div className="Headline">
        <h1>Random Color Generator</h1>
      </div>
      <br />
      <div
        style={{
          margin: '0 auto',
          width: 700,
          height: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          border: '1px solid black',
          backgroundColor: color,
        }}
      >
        <h2>Generated color: {color}</h2>
      </div>
      {/* Generate Button */}
      <button
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Generate
      </button>
      <br /> <br />
      {/* Color Input */}
      <p>Color</p>
      <input
        value={userHue}
        onChange={(event) => {
          setUserHue(event.currentTarget.value);
          const chosenHue = event.currentTarget.value;
          if (
            chosenHue === 'red' ||
            chosenHue === 'orange' ||
            chosenHue === 'yellow' ||
            chosenHue === 'green' ||
            chosenHue === 'blue' ||
            chosenHue === 'purple' ||
            chosenHue === 'pink'
          ) {
            setColor(
              randomColor({
                luminosity: 'random',
                hue: chosenHue,
              }),
            );
          }
        }}
      />
      <br />
      {/* Luminosity Input */}
      <p>Luminosity</p>
      <input
        value={userLum}
        onChange={(event) => {
          setUserLum(event.currentTarget.value);
          const chosenLum = event.currentTarget.value;
          if (chosenLum === 'light' || chosenLum === 'dark') {
            setColor(
              randomColor({
                luminosity: chosenLum,
                hue: 'random',
              }),
            );
          }
        }}
      />
    </div>
  );
}

export default App;
