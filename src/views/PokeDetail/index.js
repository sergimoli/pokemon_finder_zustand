import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import PokemonContext from "../../context/pokemons";
import usePokemonsStore from "../../zustand/stores/pokemon-store";
import PokeStats from "./components/PokeStats";

function PokeDetail() {
  //destructuring del paràmetre
  const { id } = useParams();
  //   console.log(id);

  // //co comenteme per que farem servir zustand
  // const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } =
  //   useContext(PokemonContext);

  const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } =
    usePokemonsStore((state) => ({
      getPokemonDetail: state.getPokemonDetail,
      pokemonDetail: state.pokemonDetail,
      isLoading: state.isLoading,
      hasError: state.hasError,
      errorMessage: state.errorMessage,
    }));

  useEffect(() => {
    //cada vegade que es carregui la pantall o cada cop que canvii el id al solicitar el detall del pokemon,.
    getPokemonDetail(id).catch(null);
  }, []);

  console.log(pokemonDetail);
  if (isLoading) {
    return <Loading title="Charging pokemon..." />;
  }
  return (
    <div>
      {hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <>
          <h3 style={{ marginTop: 15, marginBottom: 15 }}>INFO GENERAL:</h3>
          <p>{`Name: ${pokemonDetail?.name}`}</p>
          <p>{`Weight: ${pokemonDetail?.weight} kgs.`}</p>
          <p>{`Height: ${pokemonDetail?.height} cms.`}</p>
          <div>
            <h3 style={{ marginTop: 30, marginBottom: 15 }}>HABILITIES:</h3>
            <PokeStats stats={pokemonDetail?.stats ?? []} />
          </div>
        </>
      )}
    </div>
  );
}

export default PokeDetail;
