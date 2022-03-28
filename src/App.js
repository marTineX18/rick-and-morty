import imagenRM from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Characters from './componets/characters';

function App() {
  const [characters, setCharacters] = useState(null)

  const reqApi = async () => {
    const api = fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await (await api).json();
    
    
    setCharacters(characterApi.results);
  }

  return (
    <div className="App"> 
      <header className="App-header">

        {characters ? (
          <Characters characters = {characters} setCharacters = {setCharacters} />

        ) : (
          <>
          <h1 className='title'> Rick and Morty </h1>
          <img src={ imagenRM } alt=' Rick and Morty ' className='img-home' />
          <button onClick={ reqApi } className=' btn-search '> Buscar Personajes </button>
          </>
        )}

      </header>
    </div>
  );
}

export default App;
