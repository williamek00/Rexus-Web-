import { KeyboardSuccess } from "../action/actionType";

const initialState = {
    keyboard : []
}

export default function keyboardReducer(state = initialState,{type , payload}) {
    switch (type) {
        case KeyboardSuccess:
        return {
            ...state,
            keyboard : payload
        }
        default:
            return state
    }
}