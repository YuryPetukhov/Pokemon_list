import { ReactElement } from 'react';
import Modal from '../components/Modal';
import { service } from '../components/utils/getData';
import useModal from '../hooks/useModal';

interface IWithModalProps {
  id: number;
  name: string;
  img?: ReactElement;
}

export function withPokemonModal<T extends IWithModalProps = IWithModalProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithModal = (props: T) => {
    const { isShowing, toggle, content, setContent } = useModal();

    const img = (
      <img alt={props.name} src={service.createImgPokemon(props.id)} />
    );

    const handleClick = async () => {
      const data = await service.getInfoOfPokemon(props.id);
      setContent(data);
      toggle();
    };

    return (
      <>
        <WrappedComponent {...(props as T)} onClick={handleClick} />
        <Modal
          isShowing={isShowing}
          hide={toggle}
          content={content}
          img={img}
        />
      </>
    );
  };

  ComponentWithModal.displayName = `withModal(${displayName})`;

  return ComponentWithModal;
}
