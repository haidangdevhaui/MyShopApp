import { NavigationActions } from 'react-navigation'
import { NAVIGATE, BACK_SCREEN } from '../actions/Type'

export function goToScreen(screen, params = {}) {
    return (dispatch, getState) => {
        dispatch({
            type: NAVIGATE,
            screen
        });
    };
}

export function backPrevScreen() {
    return (dispatch, getState) => {
        dispatch({
            type: BACK_SCREEN
        })
    }
}