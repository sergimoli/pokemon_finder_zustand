import React from "react";
import { Link } from "react-router-dom";

function PokemonListItem({ name, url }) {
  const getId = () => {
    return url.split("/")[6];

    // console.log(url);
    // console.log(url.split("/"));
    // console.log(url.split("/")[6]); //on està el id!!
  };
  return (
    <>
      <p>{name}</p>
      <button>
        <Link to={`/pokemon/${getId()}`}>Veure detall</Link>
      </button>
    </>
  );
}

export default PokemonListItem;
