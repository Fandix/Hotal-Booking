import React from "react";
import style from "./MainRight.module.scss";
import CustomerInformation from "../../../../Container Components/DetalPage/CustmoerInfo"

const MainRight = (props) => {
    const { holidayPrice,normalDayPrice,id } = props
    return(
        <div className={style.wrap}>
            <div className={style.box}>
                {/*************** Room Prics ***************/}
                <div className={style.price}>
                    <div className={style.nomor}>
                        <p>Mon-Thu per night</p>
                        <span>NT.{holidayPrice}</span>
                    </div>
                    <div className={style.weekend}>
                        <p>Fri-Sun per night</p>
                        <span>NT.{normalDayPrice}</span>
                    </div>
                </div>
                {/*************** Booking Customer Information ***************/}
                <div className={style.customerInfo}>   
                    <CustomerInformation 
                        holidayPrice={holidayPrice}
                        normalDayPrice={normalDayPrice}
                        id={id}
                    />
                </div>
            </div>
        </div>
    )
};

export default MainRight;