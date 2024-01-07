import { ReactElement } from 'react';
import { IPokemonInfo } from './pokemons';

export interface IModal {
  isShowing: boolean;
  hide: () => void;
  content: IPokemonInfo | null;
  img: ReactElement;
}

export type ModalContent = IPokemonInfo | null;
