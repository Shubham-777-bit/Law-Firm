import React from 'react';
import styles from './faq.module.css';
import DropDownAccordion from '../accordion/accordion';

const FAQ = () => {
    return (
        <div className={styles.faqcontainer}>
            <div className={styles.faqcolumn}>
                {/* Left column content */}
                <div className={styles.leftContainer}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>FAQ</h2>
                    </div>
                    <div className={styles.subTitleContainer}>
                        <p className={styles.subTitle}>
                            Amet minim mollit non deserunt ullamco est si<br></br>t aliqua dolor do amet sint.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.faqcolumn}>
                {/* Right column content */}
                <DropDownAccordion/>
            </div>
        </div>
    );
}

export default FAQ;