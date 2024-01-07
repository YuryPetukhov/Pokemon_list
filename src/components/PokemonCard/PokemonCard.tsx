import { Card } from 'antd';
import { service } from '../utils/getData';
import { withPokemonModal } from '../../HOC/withPokemonModal';
import { IPokemon } from '../../interfaces/pokemons';
import style from './pokemonCard.module.css';

const { Meta } = Card;

const PokemonCardComponent = ({ name, id, ...props }: IPokemon) => {
  const img = <img alt={name} src={service.createImgPokemon(id)} />;

  return (
    <>
      <Card {...props} cover={img} className={style.pokemonCard}>
        <Meta title={name} />
      </Card>
    </>
  );
};

PokemonCardComponent.displayName = 'PokemonCard';

const PokemonCard = withPokemonModal(PokemonCardComponent);

export { PokemonCard };
