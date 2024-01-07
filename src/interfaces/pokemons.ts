interface IStats {
  base_stat: number;
}
interface ITypes {
  type: { name: string };
}

export interface IPokemon {
  name: string;
  id: number;
}

export interface IPokemonData {
  count: number;
  next: string;
  results: [];
}

export interface IMoves {
  move: {
    name: string;
  };
}

export interface IPokemonInfo {
  species: { name: string };
  stats: Array<IStats>;
  types: Array<ITypes>;
  weight: number;
  moves: Array<IMoves>;
}

export type Pokemons = ReturnType<
  (page: { page?: number }) => Array<{ id: number; name: string; url: string }>
>;

export type PokemonsState = IPokemon[] | [];

export type PokemonsStateError = null | string;
