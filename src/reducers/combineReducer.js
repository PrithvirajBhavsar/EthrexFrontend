import {combineReducers} from 'redux';
import userReducer from './userReducer';
import movieReducer from './movieReducer';
import showReducer from './showReducer';
import watchReducer from './watchReducer';

export default combineReducers({userReducer,movieReducer,watchReducer,showReducer});