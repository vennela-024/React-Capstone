import React from "react";
import styles from "./CarouselPage.module.css";
import ProfileWidget from '../components/ProfileWidget';

function CarouselPage() {
  return (
    <div className={styles.container}>
        <div className={styles.profileWidget}>
          <ProfileWidget />
        </div>
        <div className={styles.weatherWidget}>weatherWidget</div>
        <div className={styles.newsWidget}>newsWidget</div>
    </div>
  );
}

export default CarouselPage;
