import React from "react";
import style from "./RoomCard.module.scss"

const RoomCard = (props) => {
    const {holidayPrice,imageUrl,name,normalDayPrice} = props.roomdata;
    console.log(props)
    return(
        <div className={style.wrap}>
            <div className={style.img}>
                <img src={imageUrl} alt="RoomImg" />
            </div>
            <div className={style.info}>
                <p>{name}</p>
            </div>
        </div>
    )
};

export default RoomCard;