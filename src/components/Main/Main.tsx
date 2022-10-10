import { Container } from "./styles";
import {  useEffect, useState } from "react";
import { api } from "../../services/axios";
import { EvolutionChain } from "../../Types/Entities";

interface pokemonRequestDTO {
  name: string,
  url: string
}

interface pokemonEvolutionDTO {
  url: string
}

export function Main() {
  const [pokemonList, SetPokemonList] = useState([] as pokemonRequestDTO[]);
  const [pokemonEvolutionChain, SetPokemonEvolutionChain] = useState([] as EvolutionChain[]);

  useEffect(() => {
    getPokemonList();  
    getPokemonEvolutionChains();
  }, []);

  async function getPokemonList() {
    const pokemonData: Array<pokemonRequestDTO> = await api.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
    .then(res => { return res.data.results });

    const newList = pokemonData.map(item => item);

    const pokemonSpecificData = await api.get('https://pokeapi.co/api/v2/pokemon/8/')
    .then(res => { return res.data });

    console.log(pokemonSpecificData)

    SetPokemonList(newList);
  }
  
  async function getPokemonEvolutionChains() {
    const evolutionData: Array<pokemonEvolutionDTO> = await api.get('https://pokeapi.co/api/v2/evolution-chain?offset=0&limit=1000')
    .then(res => { return res.data.results });

    Promise.all(evolutionData.map(async item => {await api.get(item.url).then(res => console.log(res.data))}))
  }

  return (
    <Container>
      <div className="main">
        <ul>
        {pokemonList.map(item => 
           <li key={item.name}> name: {item.name} url: {item.url}</li>
        )}
        </ul>
        
      </div>
    </Container>
  )
}