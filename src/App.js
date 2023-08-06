import "./App.css";
import PokemonProvider from "./context/pokemons/Provider";
import Routea from "./routes/index";

function App() {
  return (
    <div>
      <PokemonProvider>
        <Routea />
      </PokemonProvider>
    </div>
  );
}

export default App;
