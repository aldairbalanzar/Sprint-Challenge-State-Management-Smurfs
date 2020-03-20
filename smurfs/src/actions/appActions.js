import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const POST_DATA = 'POST_DATA';
export const SET_ERROR = 'SET_ERROR';

export const loadData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios.get(`http://localhost:3333/smurfs`)
    .then(res => {
        console.log('1st axios: ', res.data);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
}

export const postData = (data) => dispatch => {
    dispatch({ type: POST_DATA });
    axios.post(`http://localhost:3333/smurfs`, data)
    .then(res => {
        console.log('post success: ', res);
        dispatch({ type: FETCH_DATA, payload: res })
    })
}