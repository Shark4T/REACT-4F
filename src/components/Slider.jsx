import React from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination} from "swiper"
import "swiper/css"
import 'swiper/css/pagination'
import { SliderData } from "../Data";

const Slider = () => {
    return (
        <Swiper
        pagination = {{
            dinamicBullets: true,
        }}
        modules={[Pagination]}
        height={800}
        className='mySwiper'
        >
        {SliderData.map(slider => {
            return(
                <SwiperSlide
                key={`slider-${slider.id}`}
                height = {500}
                style={{
                    backgroundImage: `url(${slider.image})`

                }}>
                    <h1>{slider.title}</h1>
                    <h3>{slider.subtitles}</h3>
                </SwiperSlide>
            )
        })}
        </Swiper>
    );
};

export default Slider;