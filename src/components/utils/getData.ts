import axios from "axios";
interface IPokemon {
    count: number,
    next: string,
    results: []
}

 interface IMoves {
  move: {
    name: string
  }
 }

interface IPokemonInfo {
  species: {name: string},
  stats: [],
  types: [],
  weight: number,
  moves: Array<IMoves>
   
}
class Service {
    _url = 'https://pokeapi.co/api/v2/pokemon/';
    _imgUrl = 'https://pokeres.bastionbot.org/images/pokemon/'
    _limit = 16;
    
     getAllPokemon =  async () => {
         try {
            const {data: {count}} = await axios.get<IPokemon>(this._url);
            const {data: {results}} = await axios.get<IPokemon>(`${this._url}?limit=${count}&offset=200`) 
            return results.map((item) => this.transformData(item))
         } catch (error) {
           throw new Error(error)
         }  
    };

    getPokemons =  async (page: number) => {
        try {
           const {data: {results}} = await axios.get<IPokemon>(`${this._url}?limit=${this._limit * page}&offset=200`) 
           return results.map((item) => this.transformData(item))
        } catch (error) {
          throw new Error(error)
        }  
   }

   transformData = (data: {name: string, url:string } ) => {
    // @ts-ignore: Object is possibly 'null'.  
    const id = +data.url.match(/\d+(?=\/$)/);
     return {...data, id}
   } 
   
   createImgPokemon = (id:number) => `${this._imgUrl}${id}.png`;

   getInfoOfPokemon = async (id: number) => {
     const {data: {species, stats, types, weight, moves}} = await axios.get<IPokemonInfo>(`${this._url}${id}`);
     return {species, stats, types, weight, moves}
   } 
}

const service = new Service();

export default service;