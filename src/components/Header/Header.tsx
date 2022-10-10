import { Container } from "./styles";
import pokeball from "../../assets/pokeball.png"
import searchIcon from "../../assets/icons/search-icon.svg"
import { pokemonGenerations } from "../../lib/pokemonGenerations";
import { BaseSyntheticEvent, SyntheticEvent, useEffect, useState } from "react";

export function Header() {
  const [generationIcon, setGenerationIcon] = useState('');

  useEffect(() => {
    const generation = pokemonGenerations.find((gen) => gen.id == 0);
    setGenerationIcon(generation?.pokedexIcon as string);
  }, [])

  function handleSelectGeneration(e:BaseSyntheticEvent) {
    const generation = pokemonGenerations.find((gen) => gen.id == e.target.value);
    setGenerationIcon(generation?.pokedexIcon as string)
  }

  return (
    <Container>
      <div className="logo">
        <img className="logo-img" src={pokeball}></img>
        <span className="logo-text">Pokédex</span>
      </div>
  
      <img className="gen-icon" src={generationIcon}></img>
      <select onChange= {handleSelectGeneration} placeholder="Select a Generation" className="gen-selector" name="generation" id="generation">
        {pokemonGenerations.map((gen) => {
          return <option key={gen.id} value={gen.id}>{gen.text}</option>
        })}
      </select>

        <input className="search-input-box" type="text" placeholder="Enter a Pokemon name here"/> 
        <img className="search-input-icon" src={searchIcon} />
      
    </Container>
  )
}