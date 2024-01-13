import React from 'react';
import styles from "./Gallery.module.css"
import GalleryImage1 from "../../assets/Gallery.svg";
import GalleryImage2 from "../../assets/Gallery1.svg";
import GalleryImage3 from "../../assets/Gallery2.svg";
import GalleryImage4 from "../../assets/Gallery3.svg";
import GalleryImage5 from "../../assets/Gallery4.svg";
import GalleryImage6 from "../../assets/Gallery5.svg";

const Gallery = () => {
  return (
    <div className={styles.gallerycontainer}>
      <h2 className={styles.galleryheading}>Area of Practices</h2>
      <div className={styles.galleryrow}>
        <img className={styles.galleryitem} src={GalleryImage1} alt="one" loading='lazy'/>
        <img className={styles.galleryitem} src={GalleryImage2} alt="two" loading='lazy'/>
      </div>
      <div className={styles.galleryrow2}>
        <img className={styles.galleryitem} src={GalleryImage3} alt="three" loading='lazy'/>
        <img className={styles.galleryitem} src={GalleryImage4} alt="four" loading='lazy'/>
      </div>
      <div className={styles.galleryrow3}>
        <img className={styles.galleryitem} src={GalleryImage5} alt="five" loading='lazy'/>
        <img className={styles.galleryitem} src={GalleryImage6} alt="six" loading='lazy'/>
      </div>
    </div>

  );
};

export default Gallery;

