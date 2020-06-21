import { connect } from "react-redux"
import RoomHeader from "../../Presentational Components/DetalPage/Header/Header"
import Panel from "./Panel/Panel";
import HeaderSlick from "../../Presentational Components/DetalPage/HeaderSlick/HeaderSlick"

const mapStateToProps = (state,ownProps) => {
    return{
        img:ownProps.img
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const img = ownProps.img
    return{
        onClick : (ownProps) => {
            Panel.open({
                component : HeaderSlick,
                props : img
            })
        }
    }
};

const RoomInfoHeader =  connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomHeader);

export default RoomInfoHeader;