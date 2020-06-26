import axios from "../Common/axios"

//=================================  Change Customer Information Form

export const ChangeCustomerInfoState = (name,value) => {
    if(name === "Name"){
        return{
            type : "CHANGE_NAME_STATE",
            value
        }
    }else{
        return{
            type : "CHANGE_TEL_STATE",
            value,
        }
    }
};