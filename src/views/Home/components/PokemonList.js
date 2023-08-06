import React from "react";
import PokemonListItem from "./PokemonListItem";
//{pokemons} es una propietat
function PokemonList({ pokemons }) {
  return (
    // <div>
    //   {pokemons?.map((value, index) => (
    //     <div key={index}>
    //       <p>{value.name}</p>
    //     </div>
    //   ))}
    // </div>

    // <div>
    //   {pokemons?.map(({ name }, index) => (
    //     <div key={index}>
    //       <p>{name}</p>
    //     </div>
    //   ))}
    // </div>

    // <div>
    //   {pokemons?.map(({ name }) => (
    //     <>
    //       <p>{name}</p>
    //       <button>Veure detall</button>
    //     </>
    //   ))}
    // </div>

    //ha fet un spread operator. es lo mateix que dirli name = {name} url = {url}
    <>
      {pokemons?.map((pokemon, index) => (
        <PokemonListItem key={index} {...pokemon} />
      ))}
    </>
  );
}

export default PokemonList;
