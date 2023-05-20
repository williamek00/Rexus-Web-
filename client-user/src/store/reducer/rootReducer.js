import {combineReducers} from 'redux'
import reducerProducts from './productReducer'
import reducerKeyboards from './keyboardReducer'
import reducerWebcams from './webcamReducer'
import reducerHeadsets from './headsetReducer'

export default combineReducers({
    reducerProducts,
    reducerKeyboards,
    reducerWebcams,
    reducerHeadsets
})
