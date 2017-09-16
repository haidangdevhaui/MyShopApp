import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import StoreScreen from './components/store/StoreScreen'
import CartScreen from './components/cart/CartScreen'
import CategoryScreen from './components/category/CategoryScreen'
import ProductScreen from './components/product/ProductScreen'
import ProfileScreen from './components/user/ProfileScreen'

import LandingScreen from './components/LandingScreen'
import LoginScreen from './components/auth/LoginScreen'
import RegisterScreen from './components/auth/RegisterScreen'

import Color from './configs/Color';

export const AppStackNavigator = StackNavigator({
    Home: { screen: StoreScreen },
    Category: { screen: CategoryScreen },
    Product: { screen: ProductScreen },
});

export const LandingNavigator = StackNavigator({
    Landing: { screen: LandingScreen },
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
});

export const AppNavigator = TabNavigator({
    TabStore: { screen: StoreScreen },
    TabCart: { screen: CartScreen },
    TabUser: { screen: ProfileScreen },
},
{
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: Color.main,
        labelStyle: {
            fontSize: 12
        },
    },
});