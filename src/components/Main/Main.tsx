import { Container } from "./styles";
import {  useEffect, useRef, useState } from "react";
import { api } from "../../services/axios";
import { EvolutionChain, Pokemon } from "../../Types/Entities";
import { Card } from "../Card/Card";
import { useSelectedGeneration } from "../../hooks/useGeneration";
import { useSearchTerm } from "../../hooks/useSearchTerm";
import { TailSpin } from 'react-loader-spinner';

interface pokemonRequestDTO {
  name: string,
  url: string
}

interface pokemonEvolutionDTO {
  url: string
}

interface mainProps {
  SetIsScrollUpButtonVisible: (state: boolean) => void;
}

export function Main({ SetIsScrollUpButtonVisible }: mainProps) {
  const [ pokemonData, SetPokemonData ] = useState([] as Pokemon[]);
  const [ filteredPokemonData, SetFilteredPokemonData ] = useState([] as Pokemon[]); 
  const [ isLoading, SetIsLoading ] = useState(false as boolean);
  const [ currentFetchedIndex, SetCurrentFetchedIndex] = useState(0 as number);
  const { selectedGeneration } = useSelectedGeneration();
  const { searchTerm } = useSearchTerm();
  // const [pokemonEvolutionChains, SetPokemonEvolutionChains] = useState([] as EvolutionChain[]);
  const loader = useRef(null);
  const scrollUpButtonObserver = useRef(null);
  const scrolledUpObserver = useRef(null);

  // Change generation for filter;
  useEffect(() => {
    SetIsLoading(true);
    SetIsScrollUpButtonVisible(false);
    SetCurrentFetchedIndex(0);    
    const fetchData = async () => {
      const fetchData: Array<pokemonRequestDTO> = await api.get('https://pokeapi.co/api/v2/pokemon', {
        params: {
          limit: selectedGeneration.pokemonQuantity,
          offset: selectedGeneration.minOffset
        }
      })
        .then(res => { return res.data.results });
      
      fetchEachPokemon(fetchData).catch((e) => console.log(e));
    }

    const fetchEachPokemon = async (list: pokemonRequestDTO[]) => {
      const pokemonSpecificData = await Promise.all(list.map(async pokemon => {
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
            description: data.name,
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
          return pokemonData;
        }))
        SetPokemonData(pokemonSpecificData);
        SetFilteredPokemonData(pokemonSpecificData);
        SetIsLoading(false);
    }
    fetchData().catch((e) => console.log(e));
    SetCurrentFetchedIndex((current) => current + 20);
  }, [selectedGeneration]);

  // Search input
  useEffect(() => { 
    if (searchTerm) {
      const newList = pokemonData.filter(pokemon => pokemon.description.includes(searchTerm) || pokemon.types.find(type => type.includes(searchTerm)));

      SetFilteredPokemonData(newList);
    } else {
      SetFilteredPokemonData(pokemonData);
    }
  }, [searchTerm]);

  // Loader Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver((entities) => {
      const loader = entities.find(entity => entity.target.className === 'loader');
      const scrollUpButtonObserver = entities.find(entity => entity.target.className === 'scrollUpButtonObserver');
      const scrolledUpObserver = entities.find(entity => entity.target.className === 'scrolledUpObserver');
      
      if (loader?.isIntersecting) {
        SetCurrentFetchedIndex((current) => current + 20);
      };

      if (scrollUpButtonObserver?.isIntersecting) {
        SetIsScrollUpButtonVisible(true);
      };

      if (scrolledUpObserver?.isIntersecting) {
        SetIsScrollUpButtonVisible(false);
      };


    }, options);

    if(loader.current)
      observer.observe(loader.current);
    
    if(scrollUpButtonObserver.current)
      observer.observe(scrollUpButtonObserver.current);

    if(scrolledUpObserver.current)
      observer.observe(scrolledUpObserver.current);
    return () => observer.disconnect();
    
  }, []);

  return (
    <Container>
      <div className="main">
        {isLoading ? 
        <div className="spinner">
        <TailSpin 
          height="80"
          width="80"
          color="gray"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          /></div> :
        filteredPokemonData.length > 0 ? 
        <ul className="card-collection">
        {filteredPokemonData.map((item, index) => {
          if (index < currentFetchedIndex)
          return <Card key={item.id} pokemon={item}/>
          }
        )}
        </ul> : <p className="no-pokemon-found">No pokemon found.</p> }
        
      </div>
      <div ref={loader} className="loader"></div>
      <div ref={scrollUpButtonObserver} className="scrollUpButtonObserver"></div>
      <div ref={scrolledUpObserver} className="scrolledUpObserver"></div>
    </Container>
  )
}