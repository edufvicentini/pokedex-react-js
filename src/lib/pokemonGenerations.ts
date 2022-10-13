import pikachuIcon from '../assets/icons/pokedex/0-all.png'
import kantoIcon from '../assets/icons/pokedex/1-kanto.png'
import johtoIcon from '../assets/icons/pokedex/2-johto.png'
import hoennIcon from '../assets/icons/pokedex/3-hoenn.png'
import sinnohIcon from '../assets/icons/pokedex/4-sinnoh.png'
import unovaIcon from '../assets/icons/pokedex/5-unova.png'
import kalosIcon from '../assets/icons/pokedex/6-kalos.png'
import alolaIcon from '../assets/icons/pokedex/7-alola.png'
import galarIcon from '../assets/icons/pokedex/8-galar.png'
import hisuiIcon from '../assets/icons/pokedex/9-hisui.png'

export interface GenerationType {
  id: number;
  text: string;
  pokedexIcon: string;
  pokemonQuantity: number;
  minOffset: number;
  maxRecord: number;
}
export const pokemonGenerations = [
  {
    id: 0,
    text: 'All Generations',
    pokedexIcon: pikachuIcon,
    pokemonQuantity: 20,
    minOffset: 0,
    maxRecord: 0
  },
  {
    id: 1,
    text: 'I - Kanto',
    pokedexIcon: kantoIcon,
    pokemonQuantity: 151,
    minOffset: 0,
    maxRecord: 151
  },
  {
    id: 2,
    text: 'II - Johto',
    pokedexIcon: johtoIcon,
    minOffset: 151,
    maxRecord: 251,
    pokemonQuantity: 100
  },
  {
    id: 3,
    text: 'III - Hoenn',
    pokedexIcon: hoennIcon,
    minOffset: 251,
    maxRecord: 386,
    pokemonQuantity: 135
  },
  {
    id: 4,
    text: 'IV - Sinnoh',
    pokedexIcon: sinnohIcon,
    minOffset: 386,
    maxRecord: 494,
    pokemonQuantity: 108
  },
  {
    id: 5,
    text: 'V - Unova',
    pokedexIcon: unovaIcon,
    minOffset: 494,
    maxRecord: 649,
    pokemonQuantity: 155
  },
  {
    id: 6,
    text: 'VI - Kalos',
    pokedexIcon: kalosIcon,
    minOffset: 649,
    maxRecord: 721,
    pokemonQuantity: 72
  },
  {
    id: 7,
    text: 'VII - Alola',
    pokedexIcon: alolaIcon,
    minOffset: 721,
    maxRecord: 808,
    pokemonQuantity: 88
  },
  {
    id: 8,
    text: 'VIII - Galar',
    pokedexIcon: galarIcon,
    minOffset: 809,
    maxRecord: 890,
    pokemonQuantity: 81
  },
  {
    id: 9,
    text: 'IX - Hisui',
    pokedexIcon: hisuiIcon,
    minOffset: 890,
    maxRecord: 904,
    pokemonQuantity: 14
  }
]