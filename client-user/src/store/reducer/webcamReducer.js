import { Webcam , webcam_loading , WebcamDetail , webcamDetail_loading} from "../action/actionType";

const initialState = {
    webcam : [],
    webcam_loading : false,
    webcamDetail:[],
    webcamDetail_loading:false
}

export default function reducerWebcams(state=initialState,{type,payload}){
    switch (type) {
        case Webcam:
        return {
            ...state,
            webcam:payload
        }
        case WebcamDetail:
        return {
            ...state,
            webcamDetail:payload
        }
        case webcam_loading:
        return {
            ...state,
            webcam_loading:payload
        }
        case webcamDetail_loading:
        return {
            ...state,
            webcamDetail_loading:payload
        }
        default:
           return state;
    }
}