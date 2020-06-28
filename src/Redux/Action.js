import axios from "../Common/axios"

//=================================  Request Rooms Data
export const RequestPost = () => {
    return{
        type : "REQUEST_POSTS",
    }
};
//=================================  Fetch Rooms Data
const Fetch_Data_Action = (res,err) => {
    //Success
    if(res){
        return{
            type:"FETCH_DATA_SUCCESS",
            payload:res.data
        }
    }

    //Fail
    return{
        type:"FETCH_DATA_FAIL",
        payload:err
    }
};

export const FetchRoomsData = () => {
    return (dispatch) => {
        axios.get("/rooms")
        .then(res => {
            dispatch(Fetch_Data_Action(res,null))
        })
        .catch(err => {
            dispatch(Fetch_Data_Action(null,err))
        })
    }
}; 

//=================================  Request Single Room Data

export const SingleRoomRequestPost = () => {
    return{
        type:"SINGLE_ROOM_REQUEST_POSTS"
    }
};

//=================================  Fetch Single Room Data

const Fetch_Single_Room_Data_Action = (res,err) => {
     //Success
     if(res){
        return{
            type:"SINGLE_ROOM_FETCH_DATA_SUCCESS",
            payload:res.data
        }
    }

    //Fail
    return{
        type:"SINGLE_ROOM_FETCH_DATA_FAIL",
        payload:err
    }
};

export const FetchSingleRoomData = (id) => {
    return (dispatch) => {
        axios.get(`/room/${id}`)
        .then(res => {
            dispatch(Fetch_Single_Room_Data_Action(res,null));
        })
        .catch(err => {
            dispatch(Fetch_Single_Room_Data_Action(null,err));
        })
    }
};

//=================================  Room Detail Header image-lightbox

export const OpenHeaderImgLightBox = (OpenState,imgIndex) => {
    return{
        type : "OPEN_LIGHT_BOX",
        OpenState,
        imgIndex
    }
};

export const ChangeImgIndex = (ImgIndex) => {
    return{
        type : "CHANGE_IMG_INDEX",
        ImgIndex
    }
};