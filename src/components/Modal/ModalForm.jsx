'use client';

import { useState } from 'react';
import styles from './modal.module.scss';

const ModalForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      phone,
      email,
      message,
    };
    console.log(data);
  };
  return (
    <form
      className={styles.form}
      action="/"
      onSubmit={handleSubmit}
      method="post"
    >
      <label className={styles.label} htmlFor="name">
        Ім’я
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          placeholder="Введіть ім’я"
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setPhone(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button className={styles.btn} type="submit">
        Залишити заявку
      </button>
    </form>
  );
};

export default ModalForm;
