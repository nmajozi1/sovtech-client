import { FETCH_CATAGORIES, RANDOM_JOKE } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_CATAGORIES:
            return {
                ...state,
                items: action.payload
            }
        case RANDOM_JOKE:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}