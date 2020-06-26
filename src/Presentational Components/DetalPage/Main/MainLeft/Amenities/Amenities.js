import React from "react";
import style from "./Amenities.module.scss";

const Amenities = (props) => {
    const {
        'Wi-Fi': wifi,
        Breakfast,
        'Mini-Bar': minibar,
        'Room-Service': roomService,
        'Air-Conditioner': airConditioner,
        'Great-View': greatView,
        'Smoke-Free': smokeFree,
        'Child-Friendly': childFriendly,
        'Pet-Friendly': petFriendly,
    } = props.Ameni;

    return(
        <div className={style.wrap}>
            <ul>
                {/*===============================================================*/}
                <li className={wifi === true? style.available:style.nonavailable}>
                    <img src="/img/room-wifi.svg" alt="Wifi"/>
                    <span>Wi-Fi</span>
                </li>
                {/*===============================================================*/}
                <li className={Breakfast === true? style.available:style.nonavailable}>
                    <img src="/img/room-breakfast.svg" alt="breakfast"/>
                    <span>Break-fast</span>
                </li>
                {/*===============================================================*/}
                <li className={minibar === true? style.available:style.nonavailable}>
                    <img src="/img/room-bar.svg" alt="Main-Bar"/>
                    <span>Main-Bar</span>
                </li>
                {/*===============================================================*/}
                <li className={roomService === true? style.available:style.nonavailable}>
                    <img src="/img/room_service.svg" alt="Room-Server"/>
                    <span>Room-Server</span>
                </li>
                {/*===============================================================*/}
                <li className={airConditioner === true? style.available:style.nonavailable}>
                    <img src="/img/room-breeze.svg" alt="Air-Conditioner"/>
                    <span>Air-Conditioner</span>
                </li>
                {/*===============================================================*/}
                <li className={greatView === true? style.available:style.nonavailable}>
                    <img src="/img/room-mountain-range.svg" alt="Great-View"/>
                    <span>Great-View</span>
                </li>
                {/*===============================================================*/}
                <li className={smokeFree === true? style.available:style.nonavailable}>
                    <img src="/img/room-no-smoke-symbol.svg" alt="Smoke Free"/>
                    <span>Smoke Free</span>
                </li>
                {/*===============================================================*/}
                <li className={petFriendly === true? style.available:style.nonavailable}>
                    <img src="/img/room-dog.svg" alt="Pet Friendly"/>
                    <span>Pet Friendly</span>
                </li>
                {/*===============================================================*/}
                <li className={childFriendly === true? style.available:style.nonavailable}>
                    <img src="/img/room-crawling-baby-silhouette.svg" alt="Child Friendly"/>
                    <span>Child Friendly</span>
                </li>
                {/*===============================================================*/}
            </ul>
        </div>
    )
};

export default Amenities;