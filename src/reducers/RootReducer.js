import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavigationReducer from './NavigationReducer'
import CartReducer from './CartReducer'

const reducer =  combineReducers({
    auth: AuthReducer,
    nav: NavigationReducer,
    cart: CartReducer
});

export default reducer;