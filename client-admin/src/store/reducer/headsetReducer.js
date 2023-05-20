import { HeadsetSuccess } from "../action/actionType";

const initialState = {
    headset : []
}

export default function headsetReducer (state=initialState,{type , payload}){
    switch (type) {
        case HeadsetSuccess:
        return {
            ...state,
            headset:payload
        }
        default:
            return state;
    }
}