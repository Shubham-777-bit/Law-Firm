import React from "react";
import styles from "./whychooseus.module.css";
import Gift from "../../assets/Gift.svg";

const WhyChooseUsSection = () => {
  return (
    <div className={styles.whyChooseUsSection}>
      <h2 className={styles.sectionHeading}>Why Choose Us?</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={Gift} alt="Gift" />
          </div>
          <div className={styles.successRateContainer}>
            98% Success rate
          </div>
          <div className={styles.infoContainer}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.Velit officia consequatduis enim velit mollit Exer.
          </div>
          <button className={styles.button}>Read more</button>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={Gift} alt="Gift" />
          </div>
          <div className={styles.successRateContainer}>
            100% Success rate
          </div>
          <div className={styles.infoContainer}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.Velit officia consequatduis enim velit mollit Exer.
          </div>
          <button className={styles.button}>Read more</button>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={Gift} alt="Gift" />
          </div>
          <div className={styles.successRateContainer}>
            100% Success rate
          </div>
          <div className={styles.infoContainer}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.Velit officia consequatduis enim velit mollit Exer.
          </div>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;

