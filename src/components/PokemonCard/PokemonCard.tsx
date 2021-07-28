import React, {FunctionComponent} from 'react';
import { Card } from 'antd';
import style from './pokemonCard.module.css';
import service from '../utils/getData';
import Modal from '../Modal'; 
import useModal from '../../hooks/modalHook';

const { Meta } = Card;
interface IPokemons {
  name: string,
  id: number
}
export const PokemonCard: FunctionComponent<IPokemons> = ({name, id}) => {
  const {isShowing, toggle, content, setContent } = useModal();
   

  const img = (
  <img 
     alt={name} 
     src={service.createImgPokemon(id)}
  />
  )
  return (
    <>
    <Card
    hoverable
    cover={img} 
    className={style.pokemonCard}
    onClick={async () => {
      const data = await service.getInfoOfPokemon(id)
      setContent(data);
      toggle()
    }}
  >
      <Meta title={name} description="What is the Pokemon" />
    </Card>
    <Modal
        isShowing={isShowing}
        hide={toggle}
        content = {content}
      />
    </>
  )
}
 