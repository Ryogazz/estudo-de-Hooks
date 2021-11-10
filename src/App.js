import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0) // seta o estado do nosso contador como 0

  // funçao que vai setar o novo valor para contador
  const clicador = () =>{
    setContador((contador) => contador + 1); //Boa pratica usar uma funçao assim. com callback
  };

  const clicadorNegativo = () =>{
    setContador((contador) => contador - 1);
  };


  return (
    <div>
      <h1>Hooks</h1>
    <h2>contador{ contador }</h2>
    <p>
      <button type='button' onClick={clicador}>
      contador { contador }
      </button>
    </p>

    <p>
      <button type='button' onClick={clicadorNegativo}>
      contador - { contador }
      </button>
    </p>

    </div>
  );
}

export default App;
