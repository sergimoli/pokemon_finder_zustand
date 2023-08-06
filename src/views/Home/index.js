// import React, { useContext, useEffect } from "react";
import React, { useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
// import PokemonContext from "../../context/pokemons";
import usePokemonsStore from "../../zustand/stores/pokemon-store";
import PokemonList from "./components/PokemonList";
import { shallow } from "zustand/shallow";

function Home() {
  // const MyContext = useContext(PokemonContext);
  // const { showAlert } = useContext(PokemonContext);

  //el treiem per que ara ho probem amb el zustand:
  // const { getPokemons, pokemons, isLoading, hasError, errorMessage } =
  //   useContext(PokemonContext);
  const { getPokemons, pokemons, isLoading, hasError, errorMessage } =
    usePokemonsStore(
      (state) => ({
        getPokemons: state.getPokemons,
        pokemons: state.pokemons,
        isLoading: state.isLoading,
        hasError: state.hasError,
        errorMessage: state.errorMessage,
      }),
      shallow
    );
  // console.log(getPokemons);

  useEffect(() => {
    getPokemons().catch(null);
  }, []);
  // console.log(MyContext);
  // useEffect(() => {
  //   showAlert();
  // }, []);

  // console.log(pokemons);

  if (isLoading) {
    return <Loading title="charging results" />;
  }

  return (
    <>
      {hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </>
  );
}

export default Home;
