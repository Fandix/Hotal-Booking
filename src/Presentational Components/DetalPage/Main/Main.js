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
                <MainRight />
            </div>
        </div>
    )
};

export default Main;