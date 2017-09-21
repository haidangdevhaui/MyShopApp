import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavigationReducer from './NavigationReducer'

const reducer =  combineReducers({
    auth: AuthReducer,
    nav: NavigationReducer,
});

export default reducer;