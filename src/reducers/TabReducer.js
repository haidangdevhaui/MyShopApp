import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../AppRoutes';
import { NAVIGATE, BACK_SCREEN } from '../actions/Type'

const initialState = {
    index: 0,
    routes: [
        { key: 'Store', routeName: 'Store' },
    ],
};
const TabReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATE:
            return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: action.screen }), state);
            break;
        case BACK_SCREEN:
            return AppNavigator.router.getStateForAction(NavigationActions.back(), state);
            break;
        default:
            return AppNavigator.router.getStateForAction(action, state) || state;
            break;
    }
};

export default TabReducer;