import { LandingNavigator } from '../AppRoutes';

const initialState = LandingNavigator.router.getStateForAction(LandingNavigator.router.getActionForPathAndParams('Landing'));
const StackLandingReducer = (state = initialState, action) => {
    const nextState = LandingNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

export default StackLandingReducer;