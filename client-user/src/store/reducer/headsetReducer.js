import { Headset , headset_loading , HeadsetDetail , headsetDetail_loading} from "../action/actionType";

const initialState = {
    headset : [],
    headset_loading : false,
    headsetDetail : [],
    headsetDetail_loading : false
}

export default function reducerHeadsets(state = initialState , {type,payload}) {
    switch (type) {
        case Headset:
        return {
            ...state,
            headset:payload
        }
        case HeadsetDetail:
        return {
            ...state,
            headsetDetail:payload
        }
        case headsetDetail_loading:
        return {
            ...state,
            headsetDetail_loading:payload
        }
        case headset_loading:
        return {
            ...state,
            headset_loading:payload
        }
        default:
            return state;
    }
}