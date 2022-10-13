import { Container } from "./styles";
import { PokemonType, pokemonTypes } from "../../lib/pokemonTypes";
import { TypeFlag } from "../TypeFlag/TypeFlag";
import { Pokemon } from "../../Types/Entities";

interface CardProps {
  pokemon: Pokemon
}

export function Card({ pokemon }: CardProps) {
  const primaryType = pokemonTypes.find((item) => item.type === pokemon.types[0]) as PokemonType;
  return (
    <Container primaryType={primaryType.backgroundColor as string}>
      <div className="pokemon-information">
        <span className="pokemon-id">{pokemon.id}</span>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <div className="pokemon-types">
          {pokemon.types.map(type => <TypeFlag key={type} type={type}/>)}
        </div>
      </div>
      <img className="pokemon-image" src={pokemon.imgURL}/>
    </Container>
  )
}