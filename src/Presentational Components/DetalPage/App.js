import React from "react";
import RoomDetaiHeader from "../../Container Components/DetalPage/Header"
import Main from "./Main/Main"

const RoomDetail = (props) => {
    const { Room } = props;
    return (
        <div>
            <RoomDetaiHeader img={Room[0].imageUrl} name={Room[0].name}/>
            <Main roomInfo={Room[0]}/>
        </div>
    )
};

export default RoomDetail;
