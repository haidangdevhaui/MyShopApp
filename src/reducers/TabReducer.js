import { AppNavigator } from '../AppRoutes';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('TabStore'));
const TabReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

export default TabReducer;