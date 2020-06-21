import React from "react";
import RoomInfoHeader from "../../Container Components/DetalPage/RoomInfoHeader"

const RoomDetail = (props) => {
    const { Room } = props;
    return (
        <div>
            <RoomInfoHeader
                img={Room[0].imageUrl}
            />
        </div>
    )
};

export default RoomDetail;
