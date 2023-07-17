import { useEffect } from 'react';
import Backdrop from './Backdrop';

import styles from './modal.module.scss';

const Modal = ({ onClick, children }) => {
  useEffect(() => {
    const onKeydown = (e) => {
      if (e.code !== 'Escape') return;
      onClick();
    };

    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, [onClick]);

  return (
    <Backdrop onClick={onClick}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        {children}
      </div>
    </Backdrop>
  );
};

export default Modal;
