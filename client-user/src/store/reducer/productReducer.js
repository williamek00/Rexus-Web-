import { Product , products_loading } from "../action/actionType";

const initialState = {
    products:[],
    productsLoading : false
}

export default function reducerProducts(state = initialState, {type,payload}){
    switch (type) {
        case Product:
        return {
            ...state,
            products:payload
        }
        case products_loading:
        return {
            ...state,
            productsLoading:payload
        }
        default:
            return state
    }
}