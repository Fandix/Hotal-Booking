import { combineReducers } from "redux"

//=============================== Fet
const FetchStateInit = {
    RoomDatas : [],
    isFetch : false,
    didInvalidata : false
}

const FetchDataReducers = (state=FetchStateInit,action) => {
    switch (action.type) {
        case "REQUEST_POSTS":
            return{
                ...state,
                isFetch : true,
                didInvalidata : false
            }
        
        case "FETCH_DATA_SUCCESS":
            return{
                ...state,
                isFetch : false,
                didInvalidata : false,
                RoomDatas : action.payload,
            }

        case "FETCH_DATA_FAIL":
            return{
                ...state,
                isFetch : false,
                didInvalidata : true,
            }
            
        default:
            return state;
    }
};

const Reducers = combineReducers({
    FetchDataReducers
});

export default Reducers;