import Image from 'next/image';
import React from 'react';
import styles from './Contacts.module.scss';
import tel from '/public/svg/telArchitrave.svg';
import email from '/public/svg/emailArchitrave.svg';
import location from '/public/svg/locationArchitrave.svg';
import Link from 'next/link';

const Contacts = () => {
  return (
    <section id="contacts" className={styles.contacts}>
      <h2 className={styles.contactsTitle}>Контакти</h2>
      <div className={styles.contactsContent}>
        <address className={styles.contactsList}>
          <div className={styles.contactsAdressContainer}>
            <div className={styles.contactsIcon}>
              <Image src={tel} alt="telephone" width={20} />
            </div>
            <a href="tel:+380503738465" className={styles.contactsAdress}>
              +380503738465
            </a>
          </div>
          <div className={styles.contactsAdressContainer}>
            <div className={styles.contactsIcon}>
              <Image src={email} alt="email" width={16} />
            </div>
            <a
              href="mailto:natalabojko@gmail.com"
              className={styles.contactsAdress}
            >
              natalabojko@gmail.com
            </a>
          </div>
          <div className={styles.contactsAdressContainer}>
            <div className={styles.contactsIcon}>
              <Image src={location} alt="location" width={16} />
            </div>
            <p className={styles.contactsAdress}>
              м. Івано-Франківськ, вул. Манюха, 19
            </p>
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
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
