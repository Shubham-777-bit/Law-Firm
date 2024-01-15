import React from 'react';
import styles from './NewsletterSubscription.module.css';

const NewsletterSubscription = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.contentBox}>
          <h2>Subscribe Our Newsletter</h2>
          <div className={styles.formBox}>
            <input type="text" placeholder="Name" className={styles.input1} />
            <input type="email" placeholder="Email" className={styles.input} />
            <button className={styles.button}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
