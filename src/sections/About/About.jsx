import Image from "next/image";
import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.aboutTitle}>Про нас</h2>
      <article className={styles.aboutContent}>
        <p className={`${styles.aboutText} ${styles.aboutTextItem}`}>
          Наша мета - перетворити ваші мрії у реальність шляхом створення
          функціональних, естетичних та стильних будівель.
          <br />
          <br />
          Маючи багаторічний досвід у галузі архітектури, ми здобули визнання
          завдяки нашим успішним проектам.
          <br />
          <br />
          Ми ретельно вивчаємо ваші потреби, враховуємо ваші бажання та
          сприйняття краси, щоб створити проект, який відображатиме вашу
          унікальну особистість та стиль.
        </p>
        <figure className={styles.aboutImgContainer}>
          <Image
            src="/skyscraper.webp"
            alt="skyscraper Архітрав"
            fill={true}
            className={styles.aboutImg}
            sizes="50vw"
            style={{
              objectFit: "cover",
            }}
          />
        </figure>
      </article>

      <p className={`${styles.aboutText} ${styles.aboutTextPosition}`}>
        Ми пропонуємо широкий спектр послуг, які охоплюють усі етапи
        архітектурного процесу. Від початкового концептуального проектування до
        завершення будівництва - ми забезпечуємо повний цикл послуг для
        реалізації вашого проекту.
      </p>
    </section>
  );
};

export default About;
