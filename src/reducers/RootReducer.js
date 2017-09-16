import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TabReducer from './TabReducer';
import StackLandingReducer from './StackLandingReducer';

const reducer =  combineReducers({
    auth: AuthReducer,
    nav: TabReducer,
    land: StackLandingReducer
});

export default reducer;