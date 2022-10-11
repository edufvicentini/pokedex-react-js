import fireIcon from '../assets/icons/types/fire-type.svg'
import flyingIcon from '../assets/icons/types/flying-type.svg'
import bugIcon from '../assets/icons/types/bug-type.svg'
import darkIcon from '../assets/icons/types/dark-type.svg'
import dragonIcon from '../assets/icons/types/dragon-type.svg'
import electricIcon from '../assets/icons/types/electric-type.svg'
import grassIcon from '../assets/icons/types/grass-type.svg'
import poisonIcon from '../assets/icons/types/poison-type.svg'
import waterIcon from '../assets/icons/types/water-type.svg'
import fairyIcon from '../assets/icons/types/fairy-type.svg'
import fightingIcon from '../assets/icons/types/fighting-type.svg'
import ghostIcon from '../assets/icons/types/ghost-type.svg'
import groundIcon from '../assets/icons/types/ground-type.svg'
import iceIcon from '../assets/icons/types/ice-type.svg'
import normalIcon from '../assets/icons/types/normal-type.svg'
import psychicIcon from '../assets/icons/types/psychic-type.svg'
import rockIcon from '../assets/icons/types/rock-type.svg'
import steelIcon from '../assets/icons/types/steel-type.svg'

export interface PokemonType {
  type: string;
  iconPath: string;
  color: string;
  backgroundColor: string
};

export const pokemonTypes: PokemonType[] = [
  {
    type: 'fire',
    iconPath: fireIcon,
    color: '#FF7D1F',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'flying',
    iconPath: flyingIcon,
    color: '#5C9AEA',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'bug',
    iconPath: bugIcon,
    color: '#7DB826',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'dark',
    iconPath: darkIcon,
    color: '#656174',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'dragon',
    iconPath: dragonIcon,
    color: '#2875CE',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'electric',
    iconPath: electricIcon,
    color: '#DCC425',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'grass',
    iconPath: grassIcon,
    color: '#3BA533',
    backgroundColor: '#87C782'
  },
  {
    type: 'poison',
    iconPath: poisonIcon,
    color: '#A754AE',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'water',
    iconPath: waterIcon,
    color: '#2A9BDD',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'fairy',
    iconPath: fairyIcon,
    color: '#FF92FF',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'fighting',
    iconPath: fightingIcon,
    color: '#FF366B',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'ghost',
    iconPath: ghostIcon,
    color: '#627BFF',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'ground',
    iconPath: groundIcon,
    color: '#FF7D2A',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'ice',
    iconPath: iceIcon,
    color: '#43E9CD',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'normal',
    iconPath: normalIcon,
    color: '#9FA39D',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'psychic',
    iconPath: psychicIcon,
    color: '#FF7A73',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'rock',
    iconPath: rockIcon,
    color: '#DCC472',
    backgroundColor: '#FDAF76'
  },
  {
    type: 'steel',
    iconPath: steelIcon,
    color: '#34A9C4',
    backgroundColor: '#FDAF76'
  }
];