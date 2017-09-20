import { AsyncStorage } from 'react-native'

/**
 * get token 
 */
export async function getToken() {
    return await AsyncStorage.getItem('token');
}

/**
 * set token
 * @param {*string} token 
 */
export function setToken(token) {
    return AsyncStorage.setItem('token', token);
}