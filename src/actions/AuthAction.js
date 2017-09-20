import axios from 'axios'
import { STORE_AUTHENTICATION, LOGOUT, REGISTER, SYNC_STORAGE_WITH_REDUCER } from '../actions/Type'
import { AsyncStorage } from 'react-native'
import { API_LOGIN } from '../configs/Api'
import { setToken, getToken } from '../helpers/Storage'
import qs from 'qs'
import jwtDecode from 'jwt-decode'

/**
 * login action
 * @param {object} data {username, password}
 */
export function login(data) {
    return (dispatch, getState) => {
        return axios.post(API_LOGIN, qs.stringify(data));
    };
}

/**
 * logout action
 */
export function logout() {
    return (dispatch, getState) => {
        dispatch({
            type: LOGOUT
        })
    }
}

/**
 * register action 
 * @param {*object} data {user info}
 */
export function register(data) {
    return (dispatch, getState) => {
        dispatch({
            type: REGISTER,
            data
        });
    };
}

/**
 * stored token action
 * @param {*string} data token
 */
export function store(data) {
    return (dispatch, getState) => {
        return setToken(data);
    }
}

/**
 * sync token to reducer
 */
export function sync() {
    return (dispatch, getState) => {
        return getToken().then(function(token) {
            dispatch({
                type: SYNC_STORAGE_WITH_REDUCER,
                data: {
                    token: token,
                    user: jwtDecode(token).user
                }
            });
        })
    }
}