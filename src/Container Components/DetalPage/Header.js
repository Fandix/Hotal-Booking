import { connect } from "react-redux";
import RoomHeader from "../../Presentational Components/DetalPage/Header/Header";
import { OpenHeaderImgLightBox,ChangeImgIndex } from "../../Redux/Action";

const mapStateToProps = (state) => {
    const { isOpen,photoIndex } = state.HeaderImgLight;
    return{
        isOpen,
        photoIndex
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        onClick:(openState,index)=>{
            dispatch(OpenHeaderImgLightBox(openState,index))
        },
        MovePrevRequest:(imageIndex,length)=>{
            const index = (imageIndex + length - 1) % length;
            dispatch(ChangeImgIndex(index));
        },
        MoveNextRequest:(imageIndex,length)=>{
            const index = (imageIndex + 1) % length;
            dispatch(ChangeImgIndex(index));
        }
    }
};

const RoomDetaiHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomHeader);

export default RoomDetaiHeader;