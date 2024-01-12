import React from "react";
import styles from "./Section.module.css";

const Section = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.leftColumn}>
          <h1 className={styles.mainHeading}>
            Let's Introduce Ourselves
          </h1>
        </div>
        <div className={styles.line}></div>
        <div className={styles.rightColumn}>
          <h1 className={styles.subHeading}>
            Criminal Lawyer
          </h1>
          <p className={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;




