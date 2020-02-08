import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL} from '../actions/Action';

const initalState = {
    data: [],
    isFetching: false,
    error: ''
}

function reducer(state = initalState, action){
    switch(action.type){
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURF_SUCCESS: 
            return {
                ...state,
                data: action.payload
            };
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;