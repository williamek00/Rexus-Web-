import {
  Product,
  Keyboard,
  Webcam,
  Headset,
  products_loading,
  keyboards_loading,
  headset_loading,
  webcam_loading,
  BASE_URL,
  HeadsetDetail,
  KeyboardDetail,
  WebcamDetail,
  headsetDetail_loading,
  keyboardDetail_loading,
  webcamDetail_loading
} from "./actionType";
import { useParams } from "react-router-dom";

export const fetchProductSuccess = (payload) => ({
  type: Product,
  payload,
});

export const fetchProductLoading = (payload) => ({
  type: products_loading,
  payload,
});

export function fetchProduct() {
  return async (dispatch) => {
    try {
      dispatch(fetchProductLoading(true));
      let response = await fetch(BASE_URL + "/product", {
        method: "GET",
      });
      if (!response.ok) throw await response.text();
      let data = await response.json();
      dispatch(fetchProductSuccess(data));
      dispatch(fetchProductLoading(false));
    } catch (error) {
      dispatch(fetchProductLoading(false));
      console.log(error);
    }
  };
}

export const fetchKeyboardSuccess = (payload) => ({
  type: Keyboard,
  payload,
});
export const fetchKeyboardLoading = (payload) => ({
  type: keyboards_loading,
  payload,
});

export function fetchKeyboard() {
  return async (dispatch) => {
    try {
      dispatch(fetchKeyboardLoading(true));
      let response = await fetch(BASE_URL + "/keyboard", {
        method: "GET",
      });
      if (!response.ok) throw await response.text();
      let data = await response.json();
      dispatch(fetchKeyboardSuccess(data));
      dispatch(fetchKeyboardLoading(false));
    } catch (error) {
      dispatch(fetchKeyboardLoading(false));
      console.log(error);
    }
  };
}

export const fetchWebcamSuccess = (payload) => ({
  type: Webcam,
  payload,
});
export const fetchWebcamLoading = (payload) => ({
  type: webcam_loading,
  payload,
});

export function fetchWebcam() {
  return async (dispatch) => {
    try {
      console.log("masuk");
      dispatch(fetchWebcamLoading(true));
      let response = await fetch(BASE_URL + "/webcam", {
        method: "GET",
      });
      if (!response.ok) throw await response.text();
      let data = await response.json();
      dispatch(fetchWebcamSuccess(data));
      dispatch(fetchWebcamLoading(false));
    } catch (error) {
      dispatch(fetchWebcamLoading(false));
      console.log(error);
    }
  };
}

export const fetchHeadsetSuccess = (payload) => ({
  type: Headset,
  payload,
});
export const fetchHeadsetLoading = (payload) => ({
  type: headset_loading,
  payload,
});

export function fetchHeadset() {
  return async (dispatch) => {
    try {
      dispatch(fetchHeadsetLoading(true));
      let response = await fetch(BASE_URL + "/headset", {
        method: "GET",
      });
      if (!response.ok) throw await response.text();
      let data = await response.json();
      dispatch(fetchHeadsetSuccess(data));
      dispatch(fetchHeadsetLoading(false));
    } catch (error) {
      dispatch(fetchHeadsetLoading(false));
      console.log(error);
    }
  };
}

export const fetchHeadsetDetailSuccess = (payload) => ({
  type: HeadsetDetail,
  payload,
});
export const fetchHeadsetDetailLoading = (payload) => ({
  type: headsetDetail_loading,
  payload,
});


export function fetchHeadsetDetail(id) {
  return async (dispatch) => {
    try {
      dispatch(fetchHeadsetDetailSuccess(true));
      let response = await fetch(BASE_URL + `/product/${id}`, {
        method: "GET",
      });
      if (!response.ok) throw await response.text();
      let data = await response.json();
      dispatch(fetchHeadsetDetailSuccess(data));
      dispatch(fetchHeadsetDetailLoading(false));
    } catch (error) {
      dispatch(fetchHeadsetDetailLoading(false));
      console.log(error);
    }
  };
}

export const fetchKeyboardDetailSuccess = (payload) => ({
  type: KeyboardDetail,
  payload,
});
export const fetchKeyboardDetailLoading = (payload) => ({
  type: keyboardDetail_loading,
  payload,
});


export function fetchKeyboardDetail(id) {
  return async (dispatch) => {
    try {
      dispatch(fetchKeyboardDetailSuccess(true));
      let response = await fetch(BASE_URL + `/product/${id}`, {
        method: "GET",
      });
      if (!response.ok) throw await response.text();
      let data = await response.json();
      console.log(data,'data masuk cox');
      dispatch(fetchKeyboardDetailSuccess(data));
      dispatch(fetchKeyboardDetailLoading(false));
    } catch (error) {
      dispatch(fetchKeyboardDetailLoading(false));
      console.log(error);
    }
  };
}

export const fetchWebcamDetailSuccess = (payload) => ({
  type: WebcamDetail,
  payload,
});
export const fetchWebcamDetailLoading = (payload) => ({
  type: webcamDetail_loading,
  payload,
});


export function fetchWebcamDetail(id) {
  return async (dispatch) => {
    try {
      dispatch(fetchWebcamDetailSuccess(true));
      let response = await fetch(BASE_URL + `/product/${id}`, {
        method: "GET",
      });
      if (!response.ok) throw await response.text();
      let data = await response.json();
      dispatch(fetchWebcamDetailSuccess(data));
      dispatch(fetchWebcamDetailLoading(false));
    } catch (error) {
      dispatch(fetchWebcamDetailLoading(false));
      console.log(error);
    }
  };
}
