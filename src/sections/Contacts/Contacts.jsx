import Link from 'next/link';
import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section id="contacts" className={styles.contacts}>
      <h2 className={styles.contactsTitle}>Контакти</h2>
      <div className={styles.contactsContent}>
        <address className={styles.contactsList}>
          <a href="tel:+380503738465" className={styles.contactsAdress}>
            0503738465
          </a>
          <a
            href="mailto:natalabojko@gmail.com"
            className={styles.contactsAdress}
          >
            natalabojko@gmail.com
          </a>
          <p className={styles.contactsAdress}>
            м. Івано-Франківськ, вул. Манюха, 19
          </p>
        </address>
        <iframe
          className={styles.contactsMap}
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.473340608786!2d24.69826947627415!3d48.92542557134138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c1111f922bf3%3A0x6d2b5fd3f9a1795e!2z0YPQuy4g0JzQsNC90Y7RhdCwLCAxOSwg0JjQstCw0L3Qvi3QpNGA0LDQvdC60L7QstGB0LosINCY0LLQsNC90L4t0KTRgNCw0L3QutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNzYwMDA!5e0!3m2!1sru!2sua!4v1689274236058!5m2!1sru!2sua"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contacts;
