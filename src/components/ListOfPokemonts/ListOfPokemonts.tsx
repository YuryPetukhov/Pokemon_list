import React from 'react';
import { useState, useEffect } from 'react';
import service from '../utils/getData';
import CardPokemon from '../PokemonCard';
import { Button } from 'antd';

export const ListOfPokemonts = () => {

 interface IPokemons {
     name: string,
     id: number
 }
const [page, setPage] = useState(1);
const [pokemonts, setPokemonts] = useState<IPokemons[] | []>([]);

    useEffect(() => {
        (async function getData () {
            const data  = await service.getPokemons(page);
            setPokemonts(data)
            console.log(data)
        })()
    }, [page])

    const handleLoadMore = () => setPage(prev => prev + 1);
    const handleLoadAll = async () => {
        const data = await service.getAllPokemon()
        setPokemonts(data)
    }


    return (
        <>
        <div className='flex-container flex-wrap flex-jb'>
          {
              pokemonts.map(({name, id}) => <CardPokemon name={name} id={id} key={id}/>)
          }
       
        </div>
         <Button onClick={handleLoadMore}>SHOW MORE</Button>
         <Button onClick={handleLoadAll}>SHOW All</Button>
         
         </>
    );
};

 