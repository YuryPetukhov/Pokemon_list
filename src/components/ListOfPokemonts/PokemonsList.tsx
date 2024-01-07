import { Alert, Button } from 'antd';
import { usePokemonData } from '../../hooks/usePokemonData';
import CardPokemon from '../PokemonCard';

export const PokemonsList = () => {
  const { data, error, handleLoadMore, handleLoadAll, isLoading } =
    usePokemonData();

  if (error) {
    return <Alert message={error} type="error" />;
  }

  return (
    <>
      <div className="flex-container flex-wrap flex-jb">
        {data.map(({ name, id }) => (
          <CardPokemon name={name} id={id} key={id} />
        ))}
      </div>
      <div>{isLoading ? 'Loading...' : null}</div>

      <Button onClick={handleLoadMore}>SHOW MORE</Button>
      <Button onClick={handleLoadAll}>SHOW All</Button>
    </>
  );
};
