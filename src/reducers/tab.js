import AppTabNavigator from '../routes/AppTabNavigator';

const initialState = AppTabNavigator.router.getStateForAction(AppTabNavigator.router.getActionForPathAndParams('Home'));

const tabReducer = (state = initialState, action) => {
    const nextState = AppTabNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

export default tabReducer;