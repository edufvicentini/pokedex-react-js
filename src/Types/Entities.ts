export type Pokemon = {
  id: number,
  name: string,
  types: string[],
  baseStats: {
    hp: number,
    atk: number,
    def: number,
    spatk: number,
    spdef: number,
    speed: number
  }
}

export type EvolutionChain = {
  id: number,
  pokemon: {
    name: string,
    trigger: string,
    evolutionDetails: {
      gender: string,
      held_item: string,
      known_move: string,
      known_move_type: string,
      location: string,
      min_level: number,
      min_happiness: number,
      min_beauty: number,
      min_affection: number,
      needs_overworld_rain: boolean,
      party_species: string,
      party_type: string,
      relative_physical_stats: number,
      time_of_day: string,
      trade_species: string,
      turn_upside_down: boolean,
    }
  }[]
}