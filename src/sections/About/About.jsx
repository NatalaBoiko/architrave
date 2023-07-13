import Image from 'next/image';
import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.aboutTitle}>Про нас</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutList}>
          <p className={`${styles.aboutText} ${styles.aboutTextItem}`}>
            Наша мета - перетворити ваші мрії у реальність шляхом створення
            функціональних, естетичних та стильних будівель.
          </p>
          <p className={`${styles.aboutText} ${styles.aboutTextItem}`}>
            Маючи багаторічний досвід у галузі архітектури, ми здобули визнання
            завдяки нашим успішним проектам.
          </p>
          <p className={`${styles.aboutText} ${styles.aboutTextItem}`}>
            Ми ретельно вивчаємо ваші потреби, враховуємо ваші бажання та
            сприйняття краси, щоб створити проект, який відображатиме вашу
            унікальну особистість та стиль.
          </p>
        </div>
        <div className={styles.aboutImgContainer}>
          <Image
            src="/skyscraper.jpg"
            alt="skyscraper"
            fill={true}
            className={styles.aboutImg}
          />
        </div>
      </div>

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
