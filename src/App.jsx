import {useState} from "react";
import twoday from './assets/twoday.png';
import drone from './assets/drone.png';
import "./App.css";

function App() {

  return (
    <div className="container">
      <img className="logo" src={twoday} alt="twoday-logo"/>
      <GameSelection/>
    </div>
  );
}

function GameSelection() {
  const [highlightedGame, setHighlighted] = useState(0)
  return (
    <div className="gameSelection">
      <Game
        image={drone}
        title="Standspill"
        description="Prøv denne utfordringen som ble vist frem under NDC og Javazone. Her kan du konkurrere med en kollega for å se hvem som raskt kan navigere dronen gjennom labyrinten og nå pakkene først"
        isHighlighted={true}
      />
    </div>
  )
}

function Game({image, title, description, isHighlighted}) {
  return (
    <a href="https://t.ly/RArwH">
    <div className="game" style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="gameDescription">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    </a>
  )
}

export default App;
