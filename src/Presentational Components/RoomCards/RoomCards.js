import React from "react";
import style from "./RoomCards.module.scss"
import RoomCard from "../RoomCard/RoomCard";
import { Link } from "react-router-dom";

const RoomCards = (props) => {
    const RoomsData = [...props.RoomsData];
    
    let i = 0;
    return(
        <div className={style.wrap}>
            <div className={style.box}>
                {
                    RoomsData.map(roomdata => {
                        return(
                            <Link key={i++}>
                                <RoomCard roomdata={roomdata}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default RoomCards;