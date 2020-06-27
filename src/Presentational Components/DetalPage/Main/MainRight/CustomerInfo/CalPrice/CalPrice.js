import React from "react";
import { subDays, eachDayOfInterval } from 'date-fns';
import style from "./CalPrice.module.scss";

const CalPrice = (props) => {
    const { startDate,endDate,normalDayPrice,holidayPrice } = props;
    let HolidayNights = 0;
    let NormalNights = 0;

    const DateCal = eachDayOfInterval({
        start: startDate,
        end: subDays(endDate, 1),
    })
    .map(day => day.getDay(day))
    .map(day => {
        if(day === 6 || day === 0 || day === 5){
            HolidayNights+=1;
        }else{
            NormalNights+=1;
        }

        return{
            HolidayNights,
            NormalNights
        }
    })

    const TotalPrice = (dateCal) => {
        const length = dateCal.length - 1;
        
        const Holiday = dateCal[length].HolidayNights;
        const Normal = dateCal[length].NormalNights;
        const Total = (Holiday * holidayPrice) + (Normal * normalDayPrice);

        return {
            Total,
            HolidayPrice : Holiday * holidayPrice,
            Normal : Normal * normalDayPrice
        };
    }
    
    return(
        <div className={style.wrap}>
            <div className={style.box}>
                {/***************** Weekday *****************/}
                <div className={style.Weekday}>
                    <div className={style.cal}>
                        <p>Weekday</p>
                        <span>${holidayPrice} x {HolidayNights} night(s)</span>
                    </div>
                    <div className={style.price}>
                        <span>NT.{TotalPrice(DateCal).HolidayPrice}</span>
                    </div>
                </div>
                {/***************** Weekend *****************/}
                <div className={style.Weekend}>
                    <div className={style.cal}>
                        <p>Weekend</p>
                        <span>${normalDayPrice} x {NormalNights} night(s)</span>
                        </div>
                    <div className={style.price}>
                        <span>NT.{TotalPrice(DateCal).Normal}</span>
                    </div>
                </div>
                {/***************** Total *****************/}
                <div className={style.total}>
                    <p>Total</p>
                    <span>NT.{TotalPrice(DateCal).Total}</span>
                </div>
            </div>
        </div>
    )
};

export default CalPrice;