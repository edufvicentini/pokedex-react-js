import { Container } from "./styles";
import pokeball from "../../assets/pokeball.png"
import searchIcon from "../../assets/icons/search-icon.svg"
import { pokemonGenerations } from "../../lib/pokemonGenerations";
import { BaseSyntheticEvent, SyntheticEvent, useContext, useEffect, useState } from "react";
import { useSelectedGeneration } from "../../hooks/useGeneration";
import { useSearchTerm } from "../../hooks/useSearchTerm";

export function Header() {
  const [generationIcon, setGenerationIcon] = useState('');
  const { selectedGeneration, handleSetSelectedGeneration } = useSelectedGeneration();
  const { handleSetSearchTerm } = useSearchTerm();
  useEffect(() => {
    handleSetSelectedGeneration(0);
  }, [])

  function handleSelectGeneration(e:BaseSyntheticEvent) {
    handleSetSelectedGeneration(e.target.value);
  };

  function handleUpdateSearchTerm(e:BaseSyntheticEvent) {
    handleSetSearchTerm(e.target.value);
  }

  return (
    <Container>
      <div className="logo">
        <img className="logo-img" src={pokeball}></img>
        <span className="logo-text">Pokédex</span>
      </div>
  
      <img className="gen-icon" src={selectedGeneration.pokedexIcon}></img>
      <select onChange= {handleSelectGeneration} placeholder="Select a Generation" className="gen-selector" name="generation" id="generation">
        {pokemonGenerations.map((gen) => {
          return <option key={gen.id} value={gen.id}>{gen.text}</option>
        })}
      </select>

        <input className="search-input-box" onChange={handleUpdateSearchTerm} type="text" placeholder="Search here"/> 
        <img className="search-input-icon" src={searchIcon} />
      
    </Container>
  )
}