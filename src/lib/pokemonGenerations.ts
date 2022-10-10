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
}

export const pokemonGenerations = [
  {
    id: 0,
    text: 'All Generations',
    pokedexIcon: pikachuIcon
  },
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
  },
  {
    id: 4,
    text: 'IV - Sinnoh',
    pokedexIcon: sinnohIcon
  },
  {
    id: 5,
    text: 'V - Unova',
    pokedexIcon: unovaIcon
  },
  {
    id: 6,
    text: 'VI - Kalos',
    pokedexIcon: kalosIcon
  },
  {
    id: 7,
    text: 'VII - Alola',
    pokedexIcon: alolaIcon
  },
  {
    id: 8,
    text: 'VIII - Galar',
    pokedexIcon: galarIcon
  },
  {
    id: 9,
    text: 'IX - Hisui',
    pokedexIcon: hisuiIcon
  }
]