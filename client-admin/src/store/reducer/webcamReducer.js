import { WebcamSuccess } from "../action/actionType";

const initialState = {
    webcam : [],
}

export default function webcamReducer (state=initialState,{type , payload}) {
    switch (type) {
        case WebcamSuccess:
        return {
            ...state,
            webcam : payload
        }
        default:
          return state
    }
}