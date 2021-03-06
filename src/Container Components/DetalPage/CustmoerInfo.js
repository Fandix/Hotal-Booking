import { connect } from "react-redux"
import CustomerInfo from "../../Presentational Components/DetalPage/Main/MainRight/CustomerInfo/CustomerInfo"
import { ChangeCustomerInfoState,ChangeBookingStartDate,ChangeBookingEndDate,BookingError,SubmitBooking } from "../../Redux/CustomerAction"
import { addDays } from 'date-fns';
import _Panel from "../Panel/Panel";

const mapStateToProps = (state) => {
    const { NameValue,TelValue } = state.BookingCustomerInfo;
    const { StartDate,NndDate,PriceCal } = state.BookingDate;
    const { post,isPosting } = state.BookingPost;

    const PostState = (_state) => {
        if(_state === true){
            _Panel.open()
        }
    };
    PostState(post);

    return{
        NameValue,
        TelValue,
        StartDate,
        NndDate,
        PriceCal,
        SubmitData:{
            name : state.BookingCustomerInfo.NameValue,
            phone : state.BookingCustomerInfo.TelValue,
            startDate : state.BookingDate.StartDate,
            endDate : state.BookingDate.NndDate
        },
        SubmitError:{
            nameError:state.SubmitError.name,
            phoneError:state.SubmitError.phone,
            dateError:state.SubmitError.date
        },
        isPosting:isPosting
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        onChange:(e) => {
            const name = e.target.name;
            const value = e.target.value;
            dispatch(ChangeCustomerInfoState(name,value));
        },
        setStartDate:(startDate=null) => {
            let endTime = "";

            if (startDate > null) {
                endTime = addDays(startDate, 1);
            }

            dispatch(ChangeBookingStartDate(startDate));
            dispatch(ChangeBookingEndDate(endTime));
        },
        setEndDate:(endDate=null) => {
            dispatch(ChangeBookingEndDate(endDate));
        },
        dispatch : dispatch,
        setBookingInit:()=>{
            dispatch(ChangeCustomerInfoState("Name",""));
            dispatch(ChangeCustomerInfoState("",""));
            dispatch(ChangeBookingStartDate(null));
            dispatch(ChangeBookingEndDate(null));
        },
        onSubmit : (data,id) => {
            let errorFlag = 0;
            if(data.name === ""){
                dispatch(BookingError("Name",false));
                errorFlag = errorFlag + 1;
            }else{
                dispatch(BookingError("Name",true));
            }

            if(data.phone === ""){
                dispatch(BookingError("Tel",false));
                errorFlag = errorFlag + 1;
            }else{
                dispatch(BookingError("Tel",true));
            }

            if(data.startDate === null || data.endDate === null){
                dispatch(BookingError("Date",false));
                errorFlag = errorFlag + 1;
            }else{
                dispatch(BookingError("Date",true));
            }
            if(errorFlag !== 0){
                return;
            }

            dispatch(SubmitBooking(id,data));

        } 
    }
};

const CustomerInformation =  connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerInfo);

export default CustomerInformation;