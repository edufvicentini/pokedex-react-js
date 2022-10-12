import { Container } from "./styles";
import {  useEffect, useState } from "react";
import { api } from "../../services/axios";
import { EvolutionChain, Pokemon } from "../../Types/Entities";
import { Card } from "../Card/Card";

interface pokemonRequestDTO {
  name: string,
  url: string
}

interface pokemonEvolutionDTO {
  url: string
}

export function Main() {
  const [pokemonList, SetPokemonList] = useState([] as Pokemon[]);
  // const [pokemonEvolutionChains, SetPokemonEvolutionChains] = useState([] as EvolutionChain[]);

  useEffect(() => {
    getPokemonList();  
    // getPokemonEvolutionChains();
  }, []);

  async function getPokemonList() {
    const pokemonData: Array<pokemonRequestDTO> = await api.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=500')
      .then(res => { return res.data.results });

    const pokemonSpecificData = await Promise.all(pokemonData.map(async pokemon => {
      const data = await api.get(pokemon.url)
                   .then(res => { return res.data })
                   
      // types
      const types = data.types.map((typeData: { type: { name: any; }; }) => typeData.type.name);
      
      // stats
      const hpStat = data.stats.find((statData: { stat: { name: string; }; }) => statData.stat.name === 'hp');
      const atkStat = data.stats.find((statData: { stat: { name: string; }; }) => statData.stat.name === 'attack');
      const defStat = data.stats.map((statData: { stat: { name: string; }; }) => statData.stat.name === 'defense');
      const spatkStat = data.stats.map((statData: { stat: { name: string; }; }) => statData.stat.name === 'special-attack');
      const spdefStat = data.stats.map((statData: { stat: { name: string; }; }) => statData.stat.name === 'special-defense');
      const speedStat = data.stats.map((statData: { stat: { name: string; }; }) => statData.stat.name === 'speed');

      const pokemonData = {
          id: data.id,
          name: data.species.name,
          types: types,
          baseStats: {
            hp: hpStat.base_stat,
            atk: atkStat.base_stat,
            def: defStat.base_stat,
            spatk: spatkStat.base_stat,
            spdef: spdefStat.base_stat,
            speed: speedStat.base_stat
          },
          imgURL: data.sprites.other['official-artwork'].front_default
      };

      return pokemonData
    }) )

    SetPokemonList(pokemonSpecificData);
  }
  
  async function getPokemonEvolutionChains() {
    const evolutionData: Array<pokemonEvolutionDTO> = await api.get('https://pokeapi.co/api/v2/evolution-chain?offset=0&limit=10')
    .then(res => { return res.data.results });

    const evolutionChains = await Promise.all(evolutionData.map(async item => {
      return await api.get(item.url).then(res => {return res.data} )  
    }))

    // const evolutionChainsArray:EvolutionChain[] = evolutionChains.map((evo) => {
    //   const chain = evo.chain;
    //   const firstForm: EvolutionChainPokemon = {
    //     evolutionChains: {
    //       name: chain.species.name,
    //       trigger: '',
    //       evolutionDetails: {
    //         gender: '',
    //         held_item: '',
    //         known_move: '',
    //         known_move_type: '',
    //         location: '',
    //         min_level: 0,
    //         min_happiness: 0,
    //         min_beauty:0,
    //         min_affection: 0,
    //         needs_overworld_rain: false,
    //         party_species: '',
    //         party_type: '',
    //         relative_physical_stats: 0,
    //         time_of_day: '',
    //         trade_species:'',
    //         turn_upside_down: false,
    //       }
    //     }
    //   }
      
    //   const firstEvolution = chain.evolves_to;
      
    //   const evolutions = firstEvolution ?
    //     firstEvolution.map((first) => {
    //     const firstEvoChain:EvolutionChainPokemon = {
    //       evolutionChains: {
    //         name: first.species.name,
    //         trigger: first.evolution_details[0].trigger.name,
    //         evolutionDetails: {
    //           gender: first.evolution_details[0].gender,
    //           held_item: first.evolution_details[0].held_item,
    //           known_move: first.evolution_details[0].known_move,
    //           known_move_type: first.evolution_details[0].known_move_type,
    //           location: first.evolution_details[0].location,
    //           min_level: first.evolution_details[0].min_level,
    //           min_happiness: first.evolution_details[0].min_happiness,
    //           min_beauty: first.evolution_details[0].min_beauty,
    //           min_affection: first.evolution_details[0].min_affection,
    //           needs_overworld_rain: first.evolution_details[0].needs_overworld_rain,
    //           party_species: first.evolution_details[0].party_species,
    //           party_type: first.evolution_details[0].party_type,
    //           relative_physical_stats: first.evolution_details[0].relative_physical_stats,
    //           time_of_day: first.evolution_details[0].time_of_day,
    //           trade_species: first.evolution_details[0].trade_species,
    //           turn_upside_down: first.evolution_details[0].turn_upside_down,
    //           }
    //         }  
    //       };
          
    //     const secondEvolution = first?.evolves_to; 
      
    //     const secondEvoChain: EvolutionChainPokemon = secondEvolution ? secondEvolution.map((second) => {
    //       return {
    //         pokemon: {
    //           name: second.species.name,
    //           trigger: second.evolution_details[0].trigger.name,
    //           evolutionDetails: {
    //             gender: second.evolution_details[0].gender,
    //             held_item: second.evolution_details[0].held_item,
    //             known_move: second.evolution_details[0].known_move,
    //             known_move_type: second.evolution_details[0].known_move_type,
    //             location: second.evolution_details[0].location,
    //             min_level: second.evolution_details[0].min_level,
    //             min_happiness: second.evolution_details[0].min_happiness,
    //             min_beauty: second.evolution_details[0].min_beauty,
    //             min_affection: second.evolution_details[0].min_affection,
    //             needs_overworld_rain: second.evolution_details[0].needs_overworld_rain,
    //             party_species: second.evolution_details[0].party_species,
    //             party_type: second.evolution_details[0].party_type,
    //             relative_physical_stats: second.evolution_details[0].relative_physical_stats,
    //             time_of_day: second.evolution_details[0].time_of_day,
    //             trade_species: second.evolution_details[0].trade_species,
    //             turn_upside_down: second.evolution_details[0].turn_upside_down,
    //             }
    //           }  
    //         }
    //     }) : null;
    //     return [firstForm, firstEvoChain, secondEvoChain]}):undefined;
    //   return {
    //     id: evo.id,
    //     basePokemonName: chain.species.name,
    //     pokemon: evolutions
    //   } as EvolutionChain
    // })
    // console.log(evolutionChainsArray)
    
    // .filter(value => value.pokemon?.name !== undefined)   
  }

  return (
    <Container>
      <div className="main">
        <ul className="card-collection">
        {pokemonList.map(item => {
           return <Card key={item.id} pokemon={item}/>
           }
        )}
        </ul>
        
      </div>
    </Container>
  )
}