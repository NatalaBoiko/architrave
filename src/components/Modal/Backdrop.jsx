import styles from "./modal.module.scss";

const Backdrop = ({ onClick, children }) => {
  return (
    <div className={styles.backdrop} onClick={onClick}>
      {children}
    </div>
  );
};

export default Backdrop;
