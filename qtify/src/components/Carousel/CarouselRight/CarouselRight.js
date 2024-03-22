import React,{useEffect,useState}  from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRight.module.css";
import {ReactComponent as RightArrow} from "../../../assests/Right.svg";

const CarouselRight = () =>{
    const swiper = useSwiper();
    const[isEnd, setIsEnd]= useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        })
    },[swiper]);

    return(
        <div className={styles.rightNav}>
            {!isEnd && <RightArrow onClick={()=> swiper.slideNext()}/>}
        </div>
    )
}
export default CarouselRight;