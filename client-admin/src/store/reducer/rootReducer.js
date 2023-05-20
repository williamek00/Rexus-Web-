import {combineReducers} from 'redux'
import headsetReducer  from './headsetReducer'
import keyboardReducer  from './keyboardReducer'
import webcamReducer  from './webcamReducer'
import categoryReducer  from './categoryReducer'

export const rootReducer = combineReducers ({
    headsetReducer,
    keyboardReducer,
    webcamReducer,
    categoryReducer
})