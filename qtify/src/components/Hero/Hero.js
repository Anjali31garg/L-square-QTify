import React from "react";
import styles from './Hero.module.css';
import hero from '../../assests/head.png';
const Hero = () =>{
    return(
        <>

        <div className={styles.heroSection}>
        
            <h1>100 Thousands Songs, ad-free <br/> Over thousands podcast episodes</h1>
           
        
        <img src={hero}/>
        
        </div>
        </>
    )
}

export default Hero;