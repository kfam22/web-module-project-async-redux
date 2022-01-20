import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const getPoem = (type)=>{
    return (dispatch)=>{
        dispatch(fetchStart())
        axios.get(`https://poetrydb.org/title/${type}`)
        .then(res => {
            const randomNum = Math.floor(Math.random() * (res.data.length - 1))
            dispatch(fetchSuccess(res.data[randomNum]))
        })
        .catch(err =>{
            dispatch(fetchFail(err))
        })
    }
}

export const fetchStart = ()=>{
    return({type: FETCH_START})
};

export const fetchFail = (errorMsg)=>{
    return({type: FETCH_FAIL, payload: errorMsg})
};

export const fetchSuccess = (poem)=>{
    return({type: FETCH_SUCCESS, payload: poem})
};