import { combineReducers } from 'redux';
import jokeReducer from './joke-reducer';

export default combineReducers({
    jokes: jokeReducer
});