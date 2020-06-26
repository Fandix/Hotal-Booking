import React from "react";
import style from "./MainLeft.module.scss";
import Amenities from "./Amenities/Amenities";

const MainLeft = (props) => {
    const { GuestMin, GuestMax, Footage, Bed, 'Private-Bath': privateBath } = props.roomInfo.descriptionShort;
    const { checkInEarly,checkInLate,checkOut } = props.roomInfo.checkInAndOut;

    return(
        <div className={style.wrap}>
            {/********* Room Information **********/}
            <div className={style.title}>{props.roomInfo.name}</div>
            <div className={style.detail}>
                <p>Max number of guests : {GuestMin} - {GuestMax}</p>
                <p>Room Size : {Footage} m²</p>
                <p>Bed size : {Bed[0]}</p>
                <p>Private bath : {privateBath}</p>
            </div>
            <div className={style.descri}>
                <p>{props.roomInfo.description}</p>
            </div>
            <div className={style.separate}>
                <span className={style.lineBreak}></span>
                <span className={style.lineBreak}></span>
                <span className={style.lineBreak}></span>
            </div>
            <div className={style.checkTime}>
                <div className={style.checkin}>
                    <p>Check in</p>
                    <span>{checkInEarly} - {checkInLate}</span>
                </div>
                <div className={style.checkout}>
                    <p>Check Out</p>
                    <span>{checkOut}</span>
                </div>
            </div>
            {/********* Room Amenities **********/}
            <div className={style.amenities}>
                <Amenities Ameni = {props.roomInfo.amenities}/>
            </div>
        </div>
    )
};

export default MainLeft;