import {SEND_WEATHER_REQUEST, RECEIVE_WEATHER_RESPONSE, RECEIVE_WEATHER_ERRORS} from "./weatherTypes";

const init = {
    loading:false,
    data: {},
    error: ''
}

const weatherReducer = (state = init, action) => {
    switch (action.type) {
        case SEND_WEATHER_REQUEST :
            return {...state, loading: true}
        case RECEIVE_WEATHER_RESPONSE :
            return {loading: false, data: action.payload, error: ''}
        case RECEIVE_WEATHER_ERRORS :
            return {loading: false, data: {}, error: 'Something Went Wrong'}

        default :
            return state
    }
}

export default weatherReducer;