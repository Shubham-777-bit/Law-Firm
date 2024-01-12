import React from 'react';
import styles from './Navbar.module.css';
import Logo from "../../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarcontent}>
        <div className={styles.logocontainer}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.navlinks}>
          <a href="#home" className={styles.link} activeClassName="active-link">
            Home
          </a>
          <a href="#attorney" className={styles.link} activeClassName="active-link">
            Attorney
          </a>
          <a href="#projects" className={styles.link} activeClassName="active-link">
            Projects
          </a>
          <a href="#about" className={styles.link} activeClassName="active-link">
            About
          </a>
        </div>
        <div className={styles.actionbutton}>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

