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
    backgroundColor: '#A2C6F3'
  },
  {
    type: 'bug',
    iconPath: bugIcon,
    color: '#78BD13',
    backgroundColor: '#97C356'
  },
  {
    type: 'dark',
    iconPath: darkIcon,
    color: '#3D3A48',
    backgroundColor: '#7E7E7E'
  },
  {
    type: 'dragon',
    iconPath: dragonIcon,
    color: '#0972EC',
    backgroundColor: '#619ADC'
  },
  {
    type: 'electric',
    iconPath: electricIcon,
    color: '#CCB51B',
    backgroundColor: '#E5D063'
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
    color: '#8D2A95',
    backgroundColor: '#B787BB'
  },
  {
    type: 'water',
    iconPath: waterIcon,
    color: '#2A9BDD',
    backgroundColor: '#67B7E5'
  },
  {
    type: 'fairy',
    iconPath: fairyIcon,
    color: '#E57AE5',
    backgroundColor: '#FFADFF'
  },
  {
    type: 'fighting',
    iconPath: fightingIcon,
    color: '#FF366B',
    backgroundColor: '#FF6D93'
  },
  {
    type: 'ghost',
    iconPath: ghostIcon,
    color: '#7747FF',
    backgroundColor: '#9A76FF'
  },
  {
    type: 'ground',
    iconPath: groundIcon,
    color: '#FF7D2A',
    backgroundColor: '#FF9958'
  },
  {
    type: 'ice',
    iconPath: iceIcon,
    color: '#27DABC',
    backgroundColor: '#AFF2E7'
  },
  {
    type: 'normal',
    iconPath: normalIcon,
    color: '#858983',
    backgroundColor: '#D6D6D6'
  },
  {
    type: 'psychic',
    iconPath: psychicIcon,
    color: '#FF7A73',
    backgroundColor: '#FFA9A5'
  },
  {
    type: 'rock',
    iconPath: rockIcon,
    color: '#DBB83E',
    backgroundColor: '#E1CF8F'
  },
  {
    type: 'steel',
    iconPath: steelIcon,
    color: '#34A9C4',
    backgroundColor: '#6BBFD1'
  }
];