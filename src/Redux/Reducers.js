import { combineReducers } from "redux"

//=============================== Rooms Data Fetch
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

//=============================== Single Room Data Fetch

const FetchSingleDataInit = {
    RoomData : {},
    isFetch : false,
    didInvalidata : false,
    fetchFail : false
};

const FetchSingleDataReducers = (state=FetchSingleDataInit,action) => {
    switch (action.type) {
        case "SINGLE_ROOM_REQUEST_POSTS":
            return{
                ...state,
                isFetch : true,
                didInvalidata : false,
                fetchFail : false
            }
        case "SINGLE_ROOM_FETCH_DATA_SUCCESS":
            return{
                ...state,
                isFetch : false,
                didInvalidata : false,
                RoomData : action.payload,
                fetchFail : false
            }
        case "SINGLE_ROOM_FETCH_DATA_FAIL":
            return{
                ...state,
                isFetch : false,
                didInvalidata : true,
                fetchFail : true
            }
        
        default:
            return state;
    }

}

const Reducers = combineReducers({
    FetchDataReducers,
    FetchSingleDataReducers
});

export default Reducers;