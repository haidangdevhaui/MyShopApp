import AppStackNavigator from '../routes/AppStackNavigator';

const initialState = AppStackNavigator.router.getStateForAction(AppStackNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state = initialState, action) => {
    const nextState = AppStackNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

export default navReducer;