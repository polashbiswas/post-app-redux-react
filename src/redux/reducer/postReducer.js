import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../actions/actionTypes";

let initialState = {
    loading: true,
    data: [],
    error: ''
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return ({
                ...state,
                loading: true
            })
        case FETCH_DATA_SUCCESS:
            return ({
                ...state,
                loading: false,
                data: action.payload
            })
        case FETCH_DATA_FAILURE:
            return ({
                ...state,
                loading: false,
                error: action.payload
            })
        default:
            return ({
                loading: true
            })
    }
}