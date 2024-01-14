import React from 'react';
import styles from './Team.module.css';
import person from "../../assets/person.svg"
import person1 from "../../assets/Person2.svg"
import person2 from "../../assets/person3.svg"
import person3 from "../../assets/person4.svg"
import person4 from "../../assets/person5.svg"
import person5 from "../../assets/person6.svg"


const OurTeam = () => {
  return (
    <div className={styles.ourTeamContainer}>
      <div className={styles.headingContainer}>Our Team</div>

      <div className={styles.flexRow}>
        <div className={styles.rectangleContainer}>
            <div className={styles.smallContainer}>
                <img src={person} alt="Team Member" />
            </div>
            <div className={styles.largeContainer}>
                <div className={styles.name}>John Doe</div>
                <div className={styles.cases}>Cases: 100</div>
            </div>
        </div>
        <div className={styles.rectangleContainer}>
        <div className={styles.smallContainer}>
                <img src={person1} alt="Team Member" />
            </div>
            <div className={styles.largeContainer}>
                <div className={styles.name}>John Doe</div>
                <div className={styles.cases}>Cases: 100</div>
            </div>
        </div>
        <div className={styles.rectangleContainer}>
        <div className={styles.smallContainer}>
                <img src={person2} alt="Team Member" />
            </div>
            <div className={styles.largeContainer}>
                <div className={styles.name}>John Doe</div>
                <div className={styles.cases}>Cases: 100</div>
            </div>
        </div>
      </div>

      <div className={styles.flexRow}>
        <div className={styles.rectangleContainer}>
        <div className={styles.smallContainer}>
                <img src={person3} alt="Team Member" />
            </div>
            <div className={styles.largeContainer}>
                <div className={styles.name}>John Doe</div>
                <div className={styles.cases}>Cases: 100</div>
            </div>
        </div>
        <div className={styles.rectangleContainer}>
        <div className={styles.smallContainer}>
                <img src={person4} alt="Team Member" />
            </div>
            <div className={styles.largeContainer}>
                <div className={styles.name}>John Doe</div>
                <div className={styles.cases}>Cases: 100</div>
            </div>
        </div>
        <div className={styles.rectangleContainer}>
        <div className={styles.smallContainer}>
                <img src={person5} alt="Team Member" />
            </div>
            <div className={styles.largeContainer}>
                <div className={styles.name}>John Doe</div>
                <div className={styles.cases}>Cases: 100</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

