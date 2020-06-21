import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./HeaderSlick.module.scss"

const HeaderSlick = (props) => {
    console.log(props[0])
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };

    return(
        <div className={style.wrap}>
            <Slider {...settings}> 
                <div>
                    <img src={props[0]} alt="img"/>
                </div>
            </Slider>
        </div>       
    )
};

export default HeaderSlick;