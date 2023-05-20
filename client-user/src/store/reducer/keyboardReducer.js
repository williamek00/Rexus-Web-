import { Keyboard , KeyboardDetail , keyboards_loading ,keyboardDetail_loading } from "../action/actionType";

const initialState = {
    keyboard : [],
    keyboards_loading : false,
    keyboardsDetail : [],
    keyboardsDetail_loading : false
}

export default function reducerKeyboards(state = initialState,{type , payload}){
    switch (type) {
        case Keyboard:
        return {
            ...state,
            keyboard:payload
        }
        case KeyboardDetail:
        return {
            ...state,
            keyboardsDetail:payload
        }
        case keyboards_loading:
        return {
            ...state,
            keyboards_loading:payload
        }
        case keyboardDetail_loading:
        return {
            ...state,
            keyboardsDetail_:payload
        }
        default:
            return state
    }
}