import { useNavigate } from "react-router-dom";
import { SuccessLogin,SuccessRegister,destroy,SuccessEditProduct,SuccessAddProduct , SuccessFetchProductId , BASE_URL , SuccessFetchCategoryId,HeadsetSuccess , KeyboardSuccess , WebcamSuccess ,SuccessEditCategory, CategorySuccess , SuccessAddCategory} from "./actionType"

export const fetchHeadsetSuccess = (payload) => ({
    type:HeadsetSuccess,
    payload
})


export function fetchHeadset (){
    return async (dispatch) => {
        try {
            let response = await fetch(BASE_URL+'/admin/headset',{
                method:"GET",
                headers:{
                    access_token:localStorage.getItem('access_token'),
                    "Content-Type": "application/json",
                },
            })
            if(!response.ok) throw await response.text()
            let data = await response.json()
            console.log(data,"<<<<<");
            dispatch(fetchHeadsetSuccess(data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchKeyboardSuccess = (payload) => ({
    type:KeyboardSuccess,
    payload
})


export function fetchKeyboard (){
    return async (dispatch) => {
        try {
            let response = await fetch(BASE_URL+'/admin/keyboard',{
                method:"GET",
                headers:{
                    access_token:localStorage.getItem('access_token'),
                    "Content-Type": "application/json",
                },
            })
            if(!response.ok) throw await response.text()
            let data = await response.json()
            dispatch(fetchKeyboardSuccess(data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchWebcamSuccess = (payload) => ({
    type:WebcamSuccess,
    payload
})

export function fetchWebcam(){
    return async (dispatch) => {
        try {
        let response = await fetch(BASE_URL+'/admin/webcam',{
            method:"GET",
            headers:{
                access_token:localStorage.getItem('access_token'),
                "Content-Type": "application/json",
            },
        })
        if(!response.ok) throw await response.text()
        let data = await response.json()
        dispatch(fetchWebcamSuccess(data))  
        } catch (error) {
            console.log(error)
        }

    }
}

export const fetchCategorySuccess = (payload) => ({
    type:CategorySuccess,
    payload
})

export function fetchCategory(){
    return async (dispatch) => {
        try {
        let response = await fetch(BASE_URL+'/admin/category',{
            method:"GET",
            headers:{
                access_token:localStorage.getItem('access_token'),
                "Content-Type": "application/json",
            },
        })
        if(!response.ok) throw await response.text()
        let data = await response.json()
        dispatch(fetchCategorySuccess(data))  
        } catch (error) {
            console.log(error)
        }

    }
}

export const addCategorySuccess = (payload) => ({
    type:SuccessAddCategory,
    payload
})

export function addCategory(value){
    return async (dispatch) => {
        try {
            console.log("MASUK COK ");
        let response = await fetch(BASE_URL+'/admin/newcategory',{
            method:"POST",
            headers:{
                access_token:localStorage.getItem('access_token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
        })
        if(!response.ok) throw await response.text()
        let data = await response.json()
        dispatch(addCategorySuccess(data))  
        } catch (error) {
            console.log(error)
        }

    }
}

export const editCategorySuccess = (payload) => ({
    type:SuccessEditCategory,
    payload
})

export function editCategory(value,id){
    return async (dispatch) => {
        try {
        let response = await fetch(BASE_URL+'/admin/updatecategory/'+id,{
            method:"PATCH",
            headers:{
                access_token:localStorage.getItem('access_token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
        })
        if(!response.ok) throw await response.text()
        let data = await response.json()
        dispatch(editCategorySuccess(data))  
        } catch (error) {
            console.log(error)
        }

    }
}

export const editProductSuccess = (payload) => ({
    type:SuccessEditProduct,
    payload
})

export function editProduct(value,id){
    return async (dispatch) => {
        try {
        let response = await fetch(BASE_URL+'/admin/updateproduct/'+id,{
            method:"PUT",
            headers:{
                access_token:localStorage.getItem('access_token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
        })
        if(!response.ok) throw await response.text()
        let data = await response.json()
        dispatch(editProductSuccess(data))  
        } catch (error) {
            console.log(error)
        }

    }
}


export const fetchCategoryIdSuccess = (payload) => ({
    type:SuccessFetchCategoryId,
    payload
})

export function fetchCategoryId(id){
    return async (dispatch) => {
        try {
        let response = await fetch(BASE_URL+'/admin/category/'+id,{
            method:"GET",
            headers:{
                access_token:localStorage.getItem('access_token'),
                "Content-Type": "application/json",
            },
        })
        if(!response.ok) throw await response.text()
        let data = await response.json()
        return data
        } catch (error) {
            console.log(error)
        }

    }
}

export const fetchProductIdSuccess = (payload) => ({
    type:SuccessFetchProductId,
    payload
})

export function fetchProductId(id){
    return async (dispatch) => {
        try {
        let response = await fetch(BASE_URL+'/admin/product/'+id,{
            method:"GET",
            headers:{
                access_token:localStorage.getItem('access_token'),
                "Content-Type": "application/json",
            },
        })
        if(!response.ok) throw await response.text()
        let data = await response.json()
        return data 
        } catch (error) {
            console.log(error)
        }

    }
}

export const addProductSuccess = (payload) => ({
    type:SuccessAddProduct,
    payload
})

export function addProduct(value){
    return async (dispatch) => {
        try {
            console.log("MASUK COK ");
        let response = await fetch(BASE_URL+'/admin/newproduct',{
            method:"POST",
            headers:{
                access_token:localStorage.getItem('access_token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
        })
        if(!response.ok) throw await response.text()
        let data = await response.json()
        dispatch(addProductSuccess(data))  
        return data
        } catch (error) {
            console.log(error)
        }

    }
}

export const LoginSuccess = (payload) => ({
    type:SuccessLogin,
    payload
})

export function adminLogin(value){
    return async (dispatch) => {
        try {
        let response = await fetch(BASE_URL+'/admin/login',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
        })
        let data = await response.json()
        
        if(data.message) throw {message:data.message}
        localStorage.setItem('access_token',data.access_token)

        return data
        } catch (error) {
            console.log(error)
        }

    }
}
export const RegisterSuccess = (payload) => ({
    type:SuccessRegister,
    payload
})

export function adminRegister(value){
    return async (dispatch) => {
        try {
        let response = await fetch(BASE_URL+'/admin/register',{
            method:"POST",
            headers:{
                access_token:localStorage.getItem('access_token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
        })
        if(!response.ok) throw await response.text()
        let data = await response.json()
        dispatch(RegisterSuccess(data))  
        return data
        } catch (error) {
            console.log(error)
        }

    }
}

export const deleteSuccess = (payload) => ({
    type:destroy,
    payload
})

export function deleteCategory(id){
    return async (dispatch) => {
        try {
        let response = await fetch(BASE_URL+'/admin/deletecategory/'+id,{
            method:"DELETE",
            headers:{
                access_token:localStorage.getItem('access_token'),
                "Content-Type": "application/json",
            },
        })
        if(!response.ok) throw await response.text()
        let data = await response.json()
        dispatch(fetchCategory())
        return data
        } catch (error) {
            console.log(error)
        }

    }
}

export const deleteProductSuccess = (payload) => ({
    type:destroy,
    payload
})

export function deleteProduct(id){
    return async (dispatch) => {
        try {
        let response = await fetch(BASE_URL+'/admin/deleteproduct/'+id,{
            method:"DELETE",
            headers:{
                access_token:localStorage.getItem('access_token'),
                "Content-Type": "application/json",
            },
        })
        if(!response.ok) throw await response.text()
        let data = await response.json()
        dispatch(fetchWebcam())
        dispatch(fetchKeyboard())
        dispatch(fetchHeadset())
        return data
        } catch (error) {
            console.log(error)
        }

    }
}