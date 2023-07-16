import styles from './modal.module.scss';

const Backdrop = ({ closeModal, children }) => {
  return (
    <div className={styles.backdrop} onClick={closeModal}>
      {children}
    </div>
  );
};

export default Backdrop;
