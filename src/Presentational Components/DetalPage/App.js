import React from "react";
import RoomInfoHeader from "../../Container Components/DetalPage/RoomInfoHeader"
import Main from "./Main/Main"

const RoomDetail = (props) => {
    const { Room } = props;
    return (
        <div>
            <RoomInfoHeader img={Room[0].imageUrl} />
            <Main roomInfo={Room[0]}/>
        </div>
    )
};

export default RoomDetail;
