import { useState } from 'react';

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

 
const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [content, setContent] = useState<IPokemonInfo | null>(null)

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
    content,
    setContent
  }
};

export default useModal;