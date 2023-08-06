import React, { useContext } from "react";
import PokemonContext from "../../context/pokemons";

function Four0Four() {
  const { pokemons } = useContext(PokemonContext);
  console.log(pokemons);
  return (
    <div>
      <p>no he trobat res, imbessil</p>
    </div>
  );
}

export default Four0Four;
