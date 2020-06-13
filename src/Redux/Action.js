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