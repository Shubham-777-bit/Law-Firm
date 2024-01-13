import React from 'react'
import styles from './Client.module.css'
import right from "../../assets/right.svg";
import left from "../../assets/Left.svg";
import profile from "../../assets/profile.svg";
import profile1 from "../../assets/profile1.svg";
import profile2 from "../../assets/profile2.svg";

const ClientComponent = () => {
  return (
    <>
        <div className={styles.headingwrapper}>
            <p className={styles.heading}>What says our <br/>happy Clients</p>
            <div className={styles.carouselwrapper}>
                <div className={styles.btn1}>
                    <img src={left} alt="leftarrow"/>
                </div>
                <div className={styles.btn2}>
                    <img src={right} alt="rightarrow"/>
                </div>
            </div>
        </div>
        <div className={styles.wrapper}>
             <div className={styles.card}>
                
                    <img src={profile} alt="cardprofile photo1" className={styles.img}/>
               
                <h3 className={styles.cardheading}>Jane Cooper</h3>
                <p className={styles.subheading}>Ceo of Hunt</p>
                <p className={styles.cardtext}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia</p>
            </div>
             <div className={styles.card2}>
                <div className={styles.imgcontainer}>
                    <img src={profile1} alt="cardprofile photo2" className={styles.img}/>
                </div>
                <h3 className={styles.cardheading}>Devon Lane</h3>
                <p className={styles.subheading}>Ceo of Hunt</p>
                <p className={styles.cardtext}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia</p> 
            </div>
             <div className={styles.card}>
                <div className={styles.imgcontainer}>
                    <img src={profile2} alt="cardprofile photo3" className={styles.img}/>
                </div>
                <h3 className={styles.cardheading}>Robert Fox</h3>
                <p className={styles.subheading}>Ceo of Hunt</p>
                <p className={styles.cardtext}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia</p>
            </div>
        </div>
    </>   
  )
}

export default ClientComponent;

