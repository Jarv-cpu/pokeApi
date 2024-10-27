import './App.css'
import { Pokemon } from './componentes/Pokemon'
import { usePokemon } from './hooks/usePokemon'


function App() {

  const [pokemon, searchPokemon] = usePokemon()

  return (
    <>
      <header>
        <form onSubmit={searchPokemon}>
          <input type="text" name="name" />
          <input type="submit" />
        </form>
      </header>
      <Pokemon pokemon={pokemon} />
    </>
  )
}

export default App
