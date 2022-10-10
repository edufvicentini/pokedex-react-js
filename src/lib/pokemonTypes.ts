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

export interface PokemonTypes {
  type: string;
  iconPath: string;
  color: string;
};

export const pokemonTypes: PokemonTypes[] = [
  {
    type: 'fire',
    iconPath: fireIcon,
    color: '#FF7D1F'
  },
  {
    type: 'flying',
    iconPath: flyingIcon,
    color: '#5C9AEA'
  },
  {
    type: 'bug',
    iconPath: bugIcon,
    color: '#7DB826'
  },
  {
    type: 'dark',
    iconPath: darkIcon,
    color: '#656174'
  },
  {
    type: 'dragon',
    iconPath: dragonIcon,
    color: '#2875CE'
  },
  {
    type: 'electric',
    iconPath: electricIcon,
    color: '#DCC425'
  },
  {
    type: 'grass',
    iconPath: grassIcon,
    color: '#3BA533'
  },
  {
    type: 'poison',
    iconPath: poisonIcon,
    color: '#A754AE'
  },
  {
    type: 'water',
    iconPath: waterIcon,
    color: '#2A9BDD'
  },
  {
    type: 'fairy',
    iconPath: fairyIcon,
    color: '#FF92FF'
  },
  {
    type: 'fighting',
    iconPath: fightingIcon,
    color: '#FF366B'
  },
  {
    type: 'ghost',
    iconPath: ghostIcon,
    color: '#627BFF'
  },
  {
    type: 'ground',
    iconPath: groundIcon,
    color: '#FF7D2A'
  },
  {
    type: 'ice',
    iconPath: iceIcon,
    color: '#43E9CD'
  },
  {
    type: 'normal',
    iconPath: normalIcon,
    color: '#9FA39D'
  },
  {
    type: 'psychic',
    iconPath: psychicIcon,
    color: '#FF7A73'
  },
  {
    type: 'rock',
    iconPath: rockIcon,
    color: '#DCC472'
  },
  {
    type: 'steel',
    iconPath: steelIcon,
    color: '#34A9C4'
  }
];