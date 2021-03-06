import React from "react";
import style from "./CustomerInfo.module.scss";
import CalPrice from "./CalPrice/CalPrice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns';
import { ChangeBookingStartDate,ChangeBookingEndDate,BookingErrorinit } from "../../../../../Redux/CustomerAction"
import "./loading.css"

class CustomerInfo extends React.Component{

    componentWillUnmount(){
        this.props.dispatch(ChangeBookingStartDate(null));
        this.props.dispatch(ChangeBookingEndDate(null));
        this.props.dispatch(BookingErrorinit());
    }

    render(){
        const { onChange,setStartDate,setEndDate,StartDate,NndDate,PriceCal,onSubmit,setBookingInit } = this.props;
        const { normalDayPrice,holidayPrice,isPosting,id } = this.props
        return(
                <form className={style.wrap}>
                <div className={style.info}>
                    {/************* Name *************/}
                    <div className={style.name}>
                        <label>Name</label>
                        <input 
                            onChange={(event) => onChange(event)}
                            name="Name"
                            value={this.props.NameValue}
                        />
                        {this.props.SubmitError.nameError === true?<p>Name must be filled in</p>:""}
                    </div>
                    {/************* Phone *************/}
                    <div className={style.phone}>
                        <label>Tel</label>
                        <input 
                            onChange={(event) => onChange(event)}
                            name="Tel"
                            value={this.props.TelValue}
                        />
                        {this.props.SubmitError.phoneError === true?<p>Phone number must be filled in</p>:""}
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
                        {this.props.SubmitError.dateError === true?<p>Dates should be selected</p>:""}
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
                        <button 
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    onSubmit(this.props.SubmitData,id);
                                    setBookingInit();
                                }
                            }       
                        >
                            {
                                isPosting === true?
                                <div className={style.posting}>
                                    <div className="sk-wave">
                                        <div className="sk-rect sk-rect1"></div>
                                        <div className="sk-rect sk-rect2"></div>
                                        <div className="sk-rect sk-rect3"></div>
                                    </div>
                                </div>:
                                <p>Reserve</p>
                            }
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default CustomerInfo;