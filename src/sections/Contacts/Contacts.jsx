import React from "react";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.contacts}>
      <h2 className={styles.contactsTitle}>Контакти</h2>
      <article className={styles.contactsContent}>
        <address className={styles.contactsList}>
          <div className={styles.contactsAdressContainer}>
            <a href="tel:+380503738460" className={styles.contactsAdress}>
              <figure className={styles.contactsIcon}>
                <svg className={styles.icon}>
                  <use href="/sprite.svg#icon-telArchitrave" />
                </svg>
              </figure>
              +380503738460
            </a>
          </div>
          <div className={styles.contactsAdressContainer}>
            <a href="mailto:ppnaz@ukr.net" className={styles.contactsAdress}>
              <figure className={styles.contactsIcon}>
                <svg className={styles.icon}>
                  <use href="/sprite.svg#icon-emailArchitrave" />
                </svg>
              </figure>
              ppnaz@ukr.net
            </a>
          </div>
          <div className={styles.contactsAdressContainer}>
            <div className={styles.contactsAdress}>
              <figure className={styles.contactsIcon}>
                <svg className={styles.icon}>
                  <use href="/sprite.svg#icon-locationArchitrave" />
                </svg>
              </figure>
              м. Івано-Франківськ, вул. Манюха, 19
            </div>
          </div>
        </address>
        <div className={styles.contactsMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.473340608786!2d24.69826947627415!3d48.92542557134138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c1111f922bf3%3A0x6d2b5fd3f9a1795e!2z0YPQuy4g0JzQsNC90Y7RhdCwLCAxOSwg0JjQstCw0L3Qvi3QpNGA0LDQvdC60L7QstGB0LosINCY0LLQsNC90L4t0KTRgNCw0L3QutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNzYwMDA!5e0!3m2!1suk!2sua!4v1689274236058!5m2!1suk!2sua"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Адреса на мапі"
          ></iframe>
        </div>
      </article>
    </section>
  );
};

export default Contacts;
