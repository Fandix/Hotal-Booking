import { combineReducers } from "redux"

//=============================== Fet
const FetchStateInit = {
    RoomDatas : [],
    isFetch : false,
    didInvalidata : false,
    fetchFail : false
}

const FetchDataReducers = (state=FetchStateInit,action) => {
    switch (action.type) {
        case "REQUEST_POSTS":
            return{
                ...state,
                isFetch : true,
                didInvalidata : false,
                fetchFail : false
            }
        
        case "FETCH_DATA_SUCCESS":
            return{
                ...state,
                isFetch : false,
                didInvalidata : false,
                RoomDatas : action.payload,
                fetchFail : false
            }

        case "FETCH_DATA_FAIL":
            return{
                ...state,
                isFetch : false,
                didInvalidata : true,
                fetchFail : true
            }
            
        default:
            return state;
    }
};

const Reducers = combineReducers({
    FetchDataReducers
});

export default Reducers;