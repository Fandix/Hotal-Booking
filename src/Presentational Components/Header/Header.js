import React from "react";
import style from "./Header.module.scss";

const Header = (props) => {
    const RoomsData = props.RoomsData;
    const slideImg = [];
    RoomsData.map(res => {
        slideImg.push(res.imageUrl)
    })

    console.log(slideImg)

    let i = 0;
    return(
        <div className={style.wrap}>
            <div className={style.slides}>
                {
                    slideImg.map(res => (
                        <div
                            key = {i++}
                            style = {{
                                background:`url(${res})`,
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                            }}
                            className = {style.slide}
                        >

                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Header;