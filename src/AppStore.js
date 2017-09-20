import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './reducers/RootReducer'

export default createStore(RootReducer, compose(applyMiddleware(thunk)));