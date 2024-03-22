import React,{useEffect}  from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import { useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";

// const Controls =({data})=>{
//     const swiper = useSwiper();

//     useEffect(()=>{


//         swiper.slideTo(0);
        
//     },[data])
//     return <></>;
// };



const Carousel = ({data, renderComponent}) =>{

    return (
        <>
        <div className={styles.mycarousel}>
            {/* <h2 style={{color: "white"}}>Carousel text</h2> */}

            <Swiper
                style={{padding: "0px 20px"}}
                initialSlide={0}
                
                 modules={[Navigation]}
                slidesPerView={"auto"}
                spaceBetween={40}
                allowTouchMove
                breakpoints={{

                    360:{
                        slidesPerView:2,
                    },

                    768:{
                        slidesPerView:4,
                        spaceBetween:50
                    },

                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 40
                    }
                }}

               
                >
                    
                    <CarouselLeft />
                        
                    <CarouselRight />
             
                    {data.map((ele)=>(
                        <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                    ))}
            </Swiper>
       </div>
        </>
    )
}

export default Carousel;