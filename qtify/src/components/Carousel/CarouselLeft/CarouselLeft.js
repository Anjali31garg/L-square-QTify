import React,{useEffect,useState}  from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeft.module.css";
import {ReactComponent as LeftArrow} from "../../../assests/Left.svg";

// const CarouselLeft = () =>{
//     const swiper = useSwiper();
//     const[isBeginning, setIsBeginning]= useState(swiper.isBeginning);

//     useEffect(()=>{
//         swiper.on("slideChange", function(){
//             setIsBeginning(swiper.isBeginning);
//         })
//     },[]);

//     return(
//         <div className={styles.leftnav}>
//             <h1>testing</h1>
//             {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()}/>}
//         </div>
//     )
// }
const CarouselLeft = () => {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning)
        })
    },[swiper])
  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}
 export default CarouselLeft;
