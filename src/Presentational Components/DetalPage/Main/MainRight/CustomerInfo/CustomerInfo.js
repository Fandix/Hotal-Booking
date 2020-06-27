import React from "react";
import style from "./CustomerInfo.module.scss";
import CalPrice from "./CalPrice/CalPrice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, eachDayOfInterval, format, parseISO } from 'date-fns';

const CustomerInfo = (props) => {
    const { onChange,setStartDate,setEndDate,StartDate,NndDate,PriceCal } = props;
    const { normalDayPrice,holidayPrice } = props

    return(
        <form className={style.wrap}>
            <div className={style.info}>
                {/************* Name *************/}
                <div className={style.name}>
                    <label>Name</label>
                    <input 
                        onChange={(event) => onChange(event)}
                        name="Name"
                        value={props.NameValue}
                    />
                </div>
                {/************* Phone *************/}
                <div className={style.phone}>
                    <label>Tel</label>
                    <input 
                        onChange={(event) => onChange(event)}
                        name="Tel"
                        value={props.TelValue}
                    />
                </div>
                {/************* Date *************/}
                <div className={style.date}>
                    <label>Date</label>
                    <div className={style.dateForm}>
                        <DatePicker
                            selected={StartDate}
                            startDate={StartDate}
                            selectsStart
                            endDate={NndDate}
                            minDate={addDays(new Date(), 1)}
                            maxDate={addDays(new Date(), 90)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Check in"
                            onChange={(startDate)=>setStartDate(startDate)}
                            
                        />
                        &#8594;
                        <DatePicker
                            selected={NndDate}
                            selectsEnd
                            startDate={StartDate}
                            endDate={NndDate}
                            minDate={addDays(NndDate, 1)}
                            maxDate={addDays(new Date(), 90)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Check out"
                            onChange={(NndDate) => setEndDate(NndDate)}
                        />
                    </div>
                </div>
                {/************* Calculate Price *************/}
                {
                    StartDate === null?""
                    :
                    <div className={PriceCal===true?style.calPrice:style.noncalPrice}>
                        <CalPrice   
                            normalDayPrice={normalDayPrice}
                            holidayPrice={holidayPrice}
                            startDate={StartDate}
                            endDate={NndDate}
                        />
                    </div>
                }
                
                {/************* Submit Button *************/}
                <div className={style.submit}>
                    <button>Reserve</button>
                </div>
            </div>
        </form>
    )
};

export default CustomerInfo;