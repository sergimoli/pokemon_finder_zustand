import { create } from "zustand";
import apiCall from "../../api";

const usePokemonsStore = create((set, get) => ({
  //ho hem copiat de provider.js però adaptant-ho...

  getPokemons: async () => {
    // try {
    //     setIsLoading(true);
    //     setHasError(false);
    //     setErrorMessge("");
    //     const pokemonsResult = await apiCall({
    //       url: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0",
    //     });
    //     setPokemons(pokemonsResult.results);
    //   } catch (error) {
    //     setPokemons([]);
    //     setHasError(true);
    //     setErrorMessge("ups, something happened...");
    //   } finally {
    //     setIsLoading(false);
    //   }
    try {
      set({ isLoading: true, errorMessage: "", hasError: false });
      console.log("calling pokemons from zustand!");
      const pokemonsResult = await apiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100",
      });
      set({ pokemons: pokemonsResult.results });
    } catch (error) {
      set({
        pokemons: [],
        hasError: true,
        errorMessage: "ups, something happened...",
      });
    } finally {
      set({ isLoading: false });
    }
  },
  pokemons: [],
  getPokemonDetail: async (id) => {
    //   if (!id) Promise.reject("fuck! id és necessari!");
    // try {
    //   setIsLoading(true);
    //   setHasError(false);
    //   setErrorMessge("");
    //   // throw new Error("eiii!"); //Force to have error a propòsit!!
    //   const pokemonDetail = await apiCall({
    //     url: `https://pokeapi.co/api/v2/pokemon/${id}`,
    //   });
    //   setPokemonDetail(pokemonDetail);
    // } catch (error) {
    //   console.log(error);
    //   setPokemonDetail({});
    //   setHasError(true);
    //   setErrorMessge("ups, something happened...");
    // } finally {
    //   setIsLoading(false);
    // }
    if (!id) return;
    try {
      set({ isLoading: true, errorMessage: "", hasError: false });
      console.log("calling pokemons detail from zustand!");
      const pokemonDetail = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      set({ pokemonDetail });
    } catch (error) {
      set({
        hasError: true,
        errorMessage: "ups, something happened...",
        pokemonDetail: {},
      });
    } finally {
      //al finally va tant si va al try o al catch
      set({ isLoading: false });
    }
  },
  pokemonDetail: {},
  isLoading: false,
  errorMessage: "",
  hasError: false,
}));

export default usePokemonsStore;
