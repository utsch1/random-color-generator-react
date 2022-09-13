import './App.css';
import { css, cx } from '@emotion/css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());
  const [userHue, setUserHue] = useState('');
  const [userLum, setUserLum] = useState('');
  const [boxSize, setBoxSize] = useState('');

  return (
    <div
      style={{
        backgroundColor: '#383e42',
        height: '700px',
        width: '100%',
      }}
    >
      <div className="Headline">
        <h1>Random Color Generator</h1>
      </div>
      <div
        className="ColorBlock"
        style={{
          backgroundColor: color,
          width: '500px',
          height: '270px',
          transition: 'all .9s ease',
          WebkitTransition: 'all .9s ease',
          MozTransition: 'all .9s ease',
        }}
      >
        <h2>Generated color: {color}</h2>
      </div>
      {/* Generate Button */}
      <div>
        <button
          className="Button"
          onClick={() => {
            setColor(randomColor());
          }}
        >
          Generate
        </button>
      </div>
      <br /> <br />
      {/* Color Input */}
      <div className="Hue">
        <p>
          Color
          <br />
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
        </p>

        <br />

        {/* Luminosity Input */}
        <p>
          Luminosity
          <br />
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
        </p>
      </div>
      {/*Boxsize*/}
      <div>
        <p>
          Box-Size
          <input
            value={boxSize}
            onChange={(event) => {
              setBoxSize(event.currentTarget.value);
              const chosenSize = event.currentTarget.value;
            }}
          />
        </p>
      </div>
    </div>
  );
}

export default App;
