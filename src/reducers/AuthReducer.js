import { LOGIN, LOGOUT, REGISTER, STORE_AUTHENTICATION, SYNC_STORAGE_WITH_REDUCER } from '../actions/Type'
import jwtDecode from 'jwt-decode'

const defaultState = {
	isAuthenticate: false,
	user: {},
	token: '',
}
const AuthReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SYNC_STORAGE_WITH_REDUCER:
			return {
				...state,
				isAuthenticate: true,
				user: action.data.user,
				token: action.data.token
			}
			break;
		case LOGOUT:
			
			break;
		case REGISTER:
			
			break;
	
		default:
			break;
	}
	return state; 
}

export default AuthReducer;