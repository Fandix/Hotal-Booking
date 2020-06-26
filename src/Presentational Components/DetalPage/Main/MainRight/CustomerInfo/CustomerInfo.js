import React from "react";
import style from "./CustomerInfo.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomerInfo = (props) => {
    const { onChange } = props;

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
                        <DatePicker/>
                        <DatePicker/>
                    </div>
                </div>
                {/************* Calculate Price *************/}
                <div className={style.calPrice}></div>
                {/************* Submit Button *************/}
                <div className={style.submit}>
                    <button>Reserve</button>
                </div>
            </div>
        </form>
    )
};

export default CustomerInfo;