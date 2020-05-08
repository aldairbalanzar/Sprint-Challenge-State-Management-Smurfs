import { FETCH_DATA, FETCH_DATA_SUCCESS, SET_ERROR, POST_DATA, POST_DATA_SUCCESS } from '../actions/appActions';

const initialState = {
    dataList: [],
    isFetching: false,
    error: ''
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA: 
            return {
                ...state,
                isFetching: true,
                dataList: []
            };
        case FETCH_DATA_SUCCESS: 
            return {
            ...state,
            dataList: [...state.dataList, ...action.payload],
            isFetching: false
        };
        case POST_DATA:
            return {
                ...state,
                datalist: [...state.dataList, action.payload]
            }
        case POST_DATA_SUCCESS: 
            return {
                ...state,
                dataList: action.payload
            };
        case SET_ERROR: 
            return {
                ...state,
                isFetching: false,
                error: `Error: ${action.payload}`
            }
        default:
            return state
    }
}