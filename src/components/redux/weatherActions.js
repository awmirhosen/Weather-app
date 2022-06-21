import {SEND_WEATHER_REQUEST, RECEIVE_WEATHER_RESPONSE, RECEIVE_WEATHER_ERRORS} from './weatherTypes';
import axios from "axios";

const sendWeatherRequest = () => {
    return {
        type: SEND_WEATHER_REQUEST
    }
}

const receiveWeatherResponse = (data) => {
    return {
        type: RECEIVE_WEATHER_RESPONSE,
        payload: data
    }
}

const receiveWeatherErrors = (errors) => {
    return {
        type: RECEIVE_WEATHER_RESPONSE,
        payload: errors
    }
}

const getWeatherInfo = (query) => {
    return dispatch => {
        dispatch(sendWeatherRequest())
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=549e348e4af38bc57ff8363782cf9b03`).then( res => {
            dispatch(receiveWeatherResponse(res.data))
        }).catch(error => {
            dispatch(receiveWeatherErrors(error.message))
        })
    }
}

export default getWeatherInfo;