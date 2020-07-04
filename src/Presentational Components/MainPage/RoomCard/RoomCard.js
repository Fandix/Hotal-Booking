import React from "react";
import style from "./RoomCard.module.scss"
import { Link } from "react-router-dom";

const RoomCard = (props) => {
    const ScrollTop = (number = 0,time) => {
        if(!time){
            document.body.scrollTop = document.documentElement.scrollTop = number;
            return number;
        }

        const spacingTime = 20;
        let spacingInex = time / spacingTime;
        let nowTop = document.body.scrollTop + document.documentElement.scrollTop;
        let everTop = (number - nowTop) / spacingInex;

        let scrollTimer = setInterval(() => {
            if (spacingInex > 0) {
                spacingInex--;
                this.ScrollTop(nowTop += everTop);
            } else {
                clearInterval(scrollTimer); 
            }
        }, spacingTime);
    };

    const {holidayPrice,imageUrl,name,normalDayPrice,id} = props.roomdata;
    return(
        <Link 
            to={{
                pathname:`/room/${id}`,
                state: { roomID: id },
            }}
            className={style.link}
            onClick={ScrollTop}
        >
            <div className={style.wrap}>
                <div className={style.img}>
                    <img src={imageUrl} alt="RoomImg" />
                </div>
                <div className={style.info}>
                    <div className={style.infobox}>
                        <div className={style.name}><p>{name}</p></div>
                        <div className={style.price}>
                            <div className={style.nomoday}>NT.{normalDayPrice}<span>Weekday</span></div>
                            <div className={style.holiday}>NT.{holidayPrice}<span>Weekend</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default RoomCard;