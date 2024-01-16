import React from 'react';
import styles from './Footer.module.css';
import Logo from "../../assets/Logo.svg";
import icon from "../../assets/Icon.svg"
import icon1 from "../../assets/Icon1.svg"
import icon2 from "../../assets/Icon2.svg"
import icon3 from "../../assets/Icon3.svg"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.footerText}>Home</p>
          <p className={styles.footerText}>Attorney</p>
          <p className={styles.footerText}>Practice Areas</p>
          <p className={styles.footerText}>About Us</p>
        </div>
        <div className={styles.imageContainer}>
          {/* Add your images here */}
          <img src={icon} alt=" 1" />
          <img src={icon1} alt=" 2" />
          <img src={icon2} alt=" 1" />
          <img src={icon3} alt=" 2" />
          {/* Add more images as needed */}
        </div>
      </div>
      <div className={styles.bottomRow}>
        <p className={styles.bottomText}>&copy; 2020 Acme. All rights reserved.</p>
        <p className={styles.bottomText}>Privacy Policy</p>
        <p className={styles.bottomText}>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;

