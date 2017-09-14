import { combineReducers } from 'redux';
import authReducer from './auth';
import navReducer from './nav';
import tabReducer from './tab';

const reducer =  combineReducers({
    auth: authReducer,
    nav: navReducer,
    tab: tabReducer,
});

export default reducer;