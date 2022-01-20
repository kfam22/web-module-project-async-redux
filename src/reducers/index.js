import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from './../actions';

const initialState = {
    poem:{
        title: '',
        author: '',
        lines: []
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                poem: {},
                isFetching: true,
                error: ''
            };

        case FETCH_FAIL:
            return {
                ...state,
                poem: {},
                isFetching: false,
                error: action.payload
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                poem: action.payload,
                isFetching: false,
                error: ''
            };
        default:
            return state;
    }
};