import './App.css';
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
      <br />
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
      <div className="dropdown">
        <div className="hue-luminosity">
          <label>
            <span>Choose hue: </span>
            <select
              id="hue"
              value={userHue}
              onChange={(event) => {
                setUserHue(event.currentTarget.value);

                const userHue = event.currentTarget.value;
                setColor(
                  randomColor({
                    luminosity: 'random',
                    hue: userHue,
                  }),
                );
              }}
            >
              <option value="red">red</option>
              <option value="yellow">yellow</option>
              <option value="orange">orange</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
              <option value="purple">purple</option>
              <option value="pink">pink</option>
            </select>
          </label>
        </div>
        {/* Luminosity Input */}
        <div className="hue-luminosity">
          <label>
            <span>Choose luminosity: </span>
            <select
              id="luminosity"
              value={userLum}
              onChange={(event) => {
                setUserLum(event.currentTarget.value);

                const userLum = event.currentTarget.value;
                setColor(
                  randomColor({
                    luminosity: userLum,
                    hue: 'random',
                  }),
                );
              }}
            >
              <option value="dark">dark</option>
              <option value="light">light</option>
            </select>
          </label>
        </div>
      </div>
      {/* Box size */}
    </div>
  );
}

export default App;
