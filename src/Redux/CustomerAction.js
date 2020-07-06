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

//=================================  Submit Booking Information ErrorMessage
export const BookingError = (errorType,isError) => {
    switch (errorType) {
        case "Name":
            if(isError){
                return{
                    type:"NAME_UNERROR"
                }
            }
            return{
                type:"NAME_ERROR"
            }
        case "Tel":
            if(isError){
                return{
                    type:"TEL_UNERROR"
                }
            }
            return{
                type:"TEL_ERROR"
            }
        case "Date":
            if(isError){
                return{
                    type:"DATE_UNERROR"
                }
            }
            return{
                type:"DATE_ERROR"
            }
        default:
            break;
    }
}

export const BookingErrorinit = () => {
    return{
        type:"ErrorInit"
    }
}

//=================================  Submit Booking Information

const BookingInfo = (res,err) => {
    if(res){
        return{
            type:"SUBMIT_SUCCESS"
        }
    }else{
        return{
            type:"SUBMIT_FAIL",
        }
    }
};

const idPosting = (_isPosting) => {
    return{
        type:"IS_POSTING",
        _isPosting
    }
}

const SubmitState = () => {
    return{
        type:"SUBMIT_INIT"
    }
}

export const SubmitBooking = (id,data) => {
    return (dispatch) => {
        dispatch(idPosting(true));
        axios.post(`/room/${id}/`,JSON.stringify(data))
        .then(res => {
            dispatch(BookingInfo(res,null))
            dispatch(SubmitState())
            dispatch(idPosting(false));
        })
        .catch(err => {
            console.log(err)
            dispatch(BookingInfo(null,err))
            dispatch(idPosting(false));
        })
    }
};




