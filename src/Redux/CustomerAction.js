import axios from "../Common/axios"

//=================================  Change Customer Information Form

export const ChangeCustomerInfoState = (name,value) => {
    if(name === "Name"){
        return{
            type : "CHANGE_NAME_STATE",
            value
        }
    }else{
        return{
            type : "CHANGE_TEL_STATE",
            value,
        }
    }
};

//=================================  Change Customer Booking Date

export const ChangeBookingStartDate = (date) => {
    return{
        type : "CHANGE_START_DATE",
        date
    }
};

export const ChangeBookingEndDate = (date) => {
    return{
        type : "CHANGE_END_DATE",
        date
    }
};

