import axios from 'axios'
import { STORE_AUTHENTICATION, LOGOUT, REGISTER } from '../actions/Type'
import { AsyncStorage } from 'react-native'

export function login(data) {
    return (dispatch, getState) => {
        return axios.post().then(() => {
            return await 
        })
        dispatch({
            type: STORE_AUTHENTICATION,
            data: {
                isAuthenticate: true,
                user: {
                    firstName: 'Vũ',
                    lastName: 'Hải Đăng',
                    email: 'hadiangdevhaui@gmail.com'
                },
                token: 'qwertyuiopasdfghjkl123456789',
            }
        });
    };
}

export function logout() {
    return (dispatch, getState) => {
        dispatch({
            type: LOGOUT
        })
    }
}

export function register(data) {
    return (dispatch, getState) => {
        dispatch({
            type: REGISTER,
            data
        });
    };
}