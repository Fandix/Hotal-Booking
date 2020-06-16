import React from "react";
import style from "./RoomCards.module.scss"
import RoomCard from "../RoomCard/RoomCard";

const RoomCards = (props) => {
    const RoomsData = [...props.RoomsData];
    
    let i = 0;
    return(
        <div className={style.wrap}>
            <div className={style.box}>
                {
                    RoomsData.map(roomdata => {
                        return(
                            <RoomCard roomdata={roomdata}/>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default RoomCards;