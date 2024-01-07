import { useState } from 'react';
import { ModalContent } from '../interfaces/modal';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [content, setContent] = useState<ModalContent>(null);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
    content,
    setContent,
  };
};

export default useModal;
