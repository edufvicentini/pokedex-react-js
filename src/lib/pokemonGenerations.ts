import kantoIcon from '../assets/icons/pokedex/1-kanto.png'
import johtoIcon from '../assets/icons/pokedex/2-johto.png'
import hoennIcon from '../assets/icons/pokedex/3-hoenn.png'

export interface GenerationType {
  id: number;
  text: string;
  pokedexIcon: string;
}

export const pokemonGenerations = [
  {
    id: 1,
    text: 'I - Kanto',
    pokedexIcon: kantoIcon
  },
  {
    id: 2,
    text: 'II - Johto',
    pokedexIcon: johtoIcon
  },
  {
    id: 3,
    text: 'III - Hoenn',
    pokedexIcon: hoennIcon
  }
]