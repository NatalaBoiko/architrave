"use client";
import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styles from "./ModalForm.module.scss";
import { SiteContext } from "@/context/SiteContext";

const ModalForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { setModalVisible, setModalBackdrop } = useContext(SiteContext);

  //send email

  const form = useRef();
  // console.log(form.current);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cknjun9",
        "template_bllpisk",
        form.current,
        "EdEHhqkrh47QPGVKz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("yes");
        },
        (error) => {
          console.log(error.text);
          console.log("no");
        }
      );

    setModalBackdrop(false);

    setTimeout(() => {
      setModalVisible(false);
    }, 500);

    form.current.reset();
  };

  return (
    <form
      className={styles.form}
      // action="/"
      // method="post"

      ref={form}
      onSubmit={sendEmail}
    >
      <label className={styles.label} htmlFor="name">
        Ім’я
        <input
          className={styles.input}
          type="text"
          id="name"
          name="from_name"
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
          name="user_phone"
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
          name="email_id"
          placeholder="Введіть пошту"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className={styles.label} htmlFor="idea">
        Ідея
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          name="message"
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
