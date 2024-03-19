import React from "react";
import styles from "./Hero.module.css";
import hero from "../../assests/head.png";
const Hero = () => {
  return (
    <>
      {/* <div className={styles.HeroTitle}>
            <h1>100 Thousands Songs, ad-free </h1>
            <h1>Over thousands podcast episodes</h1>
           
        

        <img className={styles.HeroImg} src={hero} alt="headphone"/>
         */}

      <div className={styles.heroSection}>
        <h1>
          100 Thousand Songs, ad-free <br />
          Over thousands podcast episodes
        </h1>

        <img src={hero} alt="headphone" />
      </div>
    </>
  );
};

export default Hero;
