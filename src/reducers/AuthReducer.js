import { LOGIN, LOGOUT, REGISTER, STORE_AUTHENTICATION } from '../actions/Type'

const defaultState = {
	isAuthenticate: false,
	user: {},
	token: '',
}
const AuthReducer = (state = defaultState, action) => {
	switch (action.type) {
		case STORE_AUTHENTICATION:
			
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