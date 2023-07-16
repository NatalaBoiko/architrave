import styles from './modal.module.scss';

const ModalForm = () => {
  return (
    <form
      className={styles.form}
      action="/"
      // method="post"
    >
      <label className={styles.label} htmlFor="name">
        Ім’я
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          placeholder="Введіть ім’я"
          required
        />
      </label>
      <label className={styles.label} htmlFor="phone">
        Номер
        <input
          className={styles.input}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Введіть номер"
          required
        />
      </label>
      <label className={styles.label} htmlFor="email">
        Пошта
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          placeholder="Введіть пошту"
          required
        />
      </label>
      <label className={styles.label} htmlFor="idea">
        Ідея
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          name="idea"
          id="idea"
          cols="20"
          rows="10"
          placeholder="Опис ідєї"
          readOnly
        />
      </label>
      <button className={styles.btn} type="submit">
        Залишити заявку
      </button>
    </form>
  );
};

export default ModalForm;
