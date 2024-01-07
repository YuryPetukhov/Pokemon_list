import { useEffect, useState } from 'react';
import { getErrorMessage, service } from '../components/utils/getData';
import { PokemonsState, PokemonsStateError } from '../interfaces/pokemons';

export const usePokemonData = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<PokemonsState>([]);
  const [error, setError] = useState<PokemonsStateError>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await service.getPokemons(page);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(getErrorMessage(error));
      }
    })();
  }, [page]);

  const handleLoadMore = () => setPage((prev: number) => prev + 1);

  const handleLoadAll = async () => {
    try {
      setIsLoading(true);
      const data = await service.getAllPokemon();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(getErrorMessage(error));
    }
  };

  return {
    data,
    error,
    handleLoadMore,
    handleLoadAll,
    isLoading,
  };
};
