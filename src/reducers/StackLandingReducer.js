import { NavigationActions } from 'react-navigation'
import { LandingNavigator } from '../AppRoutes';
import { NAVIGATE, BACK_SCREEN } from '../actions/Type'

const initialState = {
    index: 0,
    routes: [
        { key: 'Landing', routeName: 'Landing' },
    ],
};
const StackLandingReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATE:
            return LandingNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: action.screen }), state);
            break;
        case BACK_SCREEN:
            return LandingNavigator.router.getStateForAction(NavigationActions.back(), state);
            break;
        default:
            return LandingNavigator.router.getStateForAction(action, state) || state;
            break;
    }
};

export default StackLandingReducer;