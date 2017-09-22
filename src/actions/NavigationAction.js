import { NavigationActions } from 'react-navigation'
import { NAVIGATE, BACK_SCREEN } from '../actions/Type'

/**
 * navigate screen
 * @param {*string} screen 
 * @param {*object} params 
 */
export function goToScreen(screen, params = {}) {
    return (dispatch, getState) => {
        dispatch({
            type: NAVIGATE,
            screen
        });
    };
}

/**
 * navigate to back screen  
 */
export function backPrevScreen() {
    return (dispatch, getState) => {
        dispatch({
            type: BACK_SCREEN
        })
    }
}

export function toggleDrawer() {
    return (dispatch, getState) => {
        
    }
}