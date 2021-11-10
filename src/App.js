import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

// componetDidUpdate - executar toda vez que o componete atualiza
useEffect(() => {
  console.log('componetDidUpdate');
  //alert('fui atualizado')
})

// componentDidMount - executa 1x
useEffect(() => {
  console.log('componetDidUpdate');
  //alert('so vou aparecer 1x')
}, [])

// executa com dependencia - executa toda vez que a dependencia mudar
useEffect(() => {
  console.log('componetDidUpdate');
  alert('vou aparecer toda vez que contador for atualizado')
}, [contador])

  return (
    <div>
      <h1>Hooks</h1>
      <h2>contador: { contador }</h2>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
  }

export default App;
