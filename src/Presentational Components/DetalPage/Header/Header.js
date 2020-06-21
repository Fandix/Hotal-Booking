import React from "react";
import style from "./Header.module.scss"
import { Link } from "react-router-dom";

const RoomHeader = (props) => {
    const { img,onClick } = props;
    console.log(onClick)
    return(
        <div className={style.wrap}>
            <Link to={"/"}>
                <div className={style.home}>
                    <img src="/img/hero-logo_block.svg" alt="logo" />
                </div>
            </Link>
            <div className={ style.img }>
                <div className={ style.imgLeft } onClick={() => {onClick()}}>
                    <img src={img[0]} alt="RoomImg01" />
                </div>
                <div className={ style.imgRight }>
                    <div className={style.ingRightTop}>
                        <img src={img[1]} alt="RoomImg02" />
                    </div>
                    <div className={style.ingRightBottom}>
                        <img src={img[2]} alt="RoomImg03" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RoomHeader;