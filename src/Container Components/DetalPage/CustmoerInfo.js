import { connect } from "react-redux"
import CustomerInfo from "../../Presentational Components/DetalPage/Main/MainRight/CustomerInfo/CustomerInfo"
import { ChangeCustomerInfoState } from "../../Redux/CustomerAction"

const mapStateToProps = (state) => {
    const { NameValue,TelValue } = state.BookingCustomerInfo;
    return{
        NameValue,
        TelValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        onChange:(e) => {
            const name = e.target.name;
            const value = e.target.value;
            dispatch(ChangeCustomerInfoState(name,value));
        }
    }
};

const CustomerInformation =  connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerInfo);

export default CustomerInformation;