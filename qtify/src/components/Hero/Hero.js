import React from "react";
import styles from './Hero.module.css';
import hero from '../../assests/hero.png';
const Hero = () =>{
    return(
        <>
        <div className={styles.heroSection}>
        <img src={hero}/>
        </div>
        </>
    )
}

export default Hero;