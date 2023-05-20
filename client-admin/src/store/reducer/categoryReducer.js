import { CategorySuccess } from "../action/actionType";

const initialState = {
    category : []
}

export default function categoryReducer (state=initialState,{type , payload}){
    switch (type) {
        case CategorySuccess:
        return {
            ...state,
            category:payload
        }
        default:
            return state;
    }
}