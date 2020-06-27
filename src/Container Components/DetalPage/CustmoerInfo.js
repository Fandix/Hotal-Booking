import { connect } from "react-redux"
import CustomerInfo from "../../Presentational Components/DetalPage/Main/MainRight/CustomerInfo/CustomerInfo"
import { ChangeCustomerInfoState,ChangeBookingStartDate,ChangeBookingEndDate } from "../../Redux/CustomerAction"
import { addDays, eachDayOfInterval, format, parseISO } from 'date-fns';

const mapStateToProps = (state) => {
    const { NameValue,TelValue } = state.BookingCustomerInfo;
    const { StartDate,NndDate,PriceCal } = state.BookingDate;
    return{
        NameValue,
        TelValue,
        StartDate,
        NndDate,
        PriceCal
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
        } 
    }
};

const CustomerInformation =  connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerInfo);

export default CustomerInformation;