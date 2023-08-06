import React, { useState } from "react";
import apiCall from "../../api";
import PokemonContext from "./index";

function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({}); //objecte
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessge] = useState("");

  const getPokemons = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessge("");
      const pokemonsResult = await apiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0",
      });
      setPokemons(pokemonsResult.results);
    } catch (error) {
      setPokemons([]);
      setHasError(true);
      setErrorMessge("ups, something happened...");
    } finally {
      setIsLoading(false);
    }
  };

  const getPokemonDetail = async (id) => {
    if (!id) Promise.reject("fuck! id és necessari!");
    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessge("");

      // throw new Error("eiii!"); //Force to have error a propòsit!!

      const pokemonDetail = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      setPokemonDetail(pokemonDetail);
    } catch (error) {
      console.log(error);
      setPokemonDetail({});
      setHasError(true);
      setErrorMessge("ups, something happened...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* <PokemonContext.Provider value={{ showAlert: () => alert(10) }}></PokemonContext.Provider> */}
      <PokemonContext.Provider
        value={{
          getPokemons,
          pokemons,
          getPokemonDetail,
          pokemonDetail,
          isLoading,
          errorMessage,
          hasError,
        }}
      >
        {children}
      </PokemonContext.Provider>
    </div>
  );
}

export default PokemonProvider;
