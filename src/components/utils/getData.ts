import axios from 'axios';
import {
  IPokemonData,
  IPokemonInfo,
  Pokemons,
} from '../../interfaces/pokemons';

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}
class Service {
  private _url = 'https://pokeapi.co/api/v2/pokemon/';
  private _imgUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  private _limit = 16;

  public getAllPokemon = async (): Promise<Pokemons> => {
    try {
      const {
        data: { count },
      } = await axios.get<IPokemonData>(this._url);

      const {
        data: { results },
      } = await axios.get<IPokemonData>(
        `${this._url}?limit=${count}&offset=200`
      );

      return results.map((item) => this.transformData(item));
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    }
  };

  getPokemons = async (page: number): Promise<Pokemons> => {
    try {
      const {
        data: { results },
      } = await axios.get<IPokemonData>(
        `${this._url}?limit=${this._limit * page}&offset=200`
      );
      return results.map((item) => this.transformData(item));
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    }
  };

  transformData = (data: { name: string; url: string }) => {
    const id = Number(data.url.match(/\d+(?=\/$)/));
    return { ...data, id };
  };

  createImgPokemon = (id: number) => `${this._imgUrl}${id}.png`;

  getInfoOfPokemon = async (id: number) => {
    const {
      data: { species, stats, types, weight, moves },
    } = await axios.get<IPokemonInfo>(`${this._url}${id}`);
    return { species, stats, types, weight, moves };
  };
}

export const service = new Service();
