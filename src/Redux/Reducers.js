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

//=============================== Header Img LightBox

const HeaderHightBoxInit = {
    photoIndex: 0,
    isOpen: false,
};

const HeaderImgLight = (state=HeaderHightBoxInit,action) => {
    switch (action.type) {
        case "OPEN_LIGHT_BOX":
            return{
                ...state,
                isOpen:action.OpenState,
                photoIndex:action.imgIndex
            }
        case "CHANGE_IMG_INDEX":
            return{
                ...state,
                photoIndex:action.ImgIndex
            }
        default:
            return state;
    }
};

//=============================== Booking Room Customer Infomation

const CustomerStateInit = {
    NameValue:"",
    TelValue:""
};

const BookingCustomerInfo = (state=CustomerStateInit,action) => {
    switch (action.type) {
        case "CHANGE_NAME_STATE":
            return{
                ...state,
                NameValue:action.value
            }
        case "CHANGE_TEL_STATE":
                return{
                    ...state,
                    TelValue:action.value
                }
        default:
            return state;
    }
};

//=============================== Booking Date

const BookingDateInit = {
    StartDate:null,
    NndDate:null,
    PriceCal:false
};

export const BookingDate = (state=BookingDateInit,action) => {
    switch (action.type) {
        case "CHANGE_START_DATE":
            return{
                ...state,
                StartDate:action.date,
                PriceCal:true
            }
        case "CHANGE_END_DATE":
            return{
                ...state,
                NndDate:action.date
            }
        default:
            return state;
    }
};

//=============================== Submit Information Error

const SubmitInit = {
    name:false,
    phone:false,
    date:false
};

const SubmitError = (state=SubmitInit,action) => {
    switch (action.type) {
        case "NAME_ERROR":
            return{
                ...state,
                name:true
            }
        case "NAME_UNERROR":
            return{
                ...state,
                name:false
            }

        case "TEL_ERROR":
            return{
                ...state,
                phone:true
            }
        case "TEL_UNERROR":
            return{
                ...state,
                phone:false
            }
        
        case "DATE_ERROR":
            return{
                ...state,
                date:true
            }
        case "DATE_UNERROR":
            return{
                ...state,
                date:false
            }

        case "ErrorInit":
            return{
                state:SubmitInit,
            }

        default:
            return state;
    }
};


const Reducers = combineReducers({
    FetchDataReducers,
    FetchSingleDataReducers,
    BookingCustomerInfo,
    BookingDate,
    HeaderImgLight,
    SubmitError
});

export default Reducers;