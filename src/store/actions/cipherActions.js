import axiosApi from "../../axios-api";
import {CHANGE_VALUE, DECODE_SUCCESS, ENCODE_SUCCESS} from "./actionTypes";

export const encodeSuccess = (encode) => {
	return {type: ENCODE_SUCCESS, encode}
};

export const decodeSuccess = (decode) => {
	return {type: DECODE_SUCCESS, decode}
};

export const changeValue = (e) => {
	return {type: CHANGE_VALUE, e}
};

export const sendToEncode = () => {
	return (dispatch, getState) => {
		const state = getState();
		if (state.password === '') {
			alert('Please, Enter Password')
		} else {
			axiosApi.post('/encode', {password: state.password, message: state.decoded}).then(response => {
				dispatch(encodeSuccess(response.data.encoded))
			});
		}
	}
};

export const sendToDecode = () => {
	return (dispatch, getState) => {
		const state = getState();
		if (state.password === '') {
			alert('Please, Enter Password')
		} else {
			axiosApi.post('/decode', {password: state.password, message: state.encoded}).then(response => {
				dispatch(decodeSuccess(response.data.decoded))
			});
		}
	}
};