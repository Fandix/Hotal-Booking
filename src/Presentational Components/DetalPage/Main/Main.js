import React from "react";
import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import style from "./Main.module.scss";

const Main = (props) => {
    return(
        <div className={style.wrap}>
            <div className={style.left}>
                <MainLeft roomInfo = {props.roomInfo}/>
            </div>
            <div className={style.right}>
                <MainRight 
                    holidayPrice = {props.roomInfo.holidayPrice}
                    normalDayPrice = {props.roomInfo.normalDayPrice}
                    id = {props.roomInfo.id}
                />
            </div>
        </div>
    )
};

export default Main;