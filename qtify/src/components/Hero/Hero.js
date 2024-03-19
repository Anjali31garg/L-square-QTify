import React from "react";
import styles from './Hero.module.css';
import hero from '../../assests/head.png';
const Hero = () =>{
    return(
        <>

        <section className={styles.Hero}>
        <div className={styles.HeroTitle}>
            <h1>100 Thousands Songs, ad-free </h1>
            <h1>Over thousands podcast episodes</h1>
           
        </div>

        <img className={styles.HeroImg} src={hero} alt="headphone"/>
        
        </section>
        </>
    )
}

export default Hero;