import React from 'react'
import { TabNavigator, StackNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation'
import { Tabs, Tab, Icon, TabHeading, FooterTab } from 'native-base'
import { Image, DrawerLayoutAndroid } from 'react-native'

import ShopScreen from './components/shop/ShopScreen'
import FavoriteScreen from './components/favorite/FavoriteScreen'
import CartScreen from './components/cart/CartScreen'
import CategoryScreen from './components/category/CategoryScreen'
import ProductScreen from './components/product/ProductScreen'
import ProfileScreen from './components/user/ProfileScreen'
import SearchScreen from './components/search/SearchScreen'

import LandingScreen from './components/LandingScreen'
import LoginScreen from './components/auth/login/LoginScreen'
import RegisterScreen from './components/auth/register/RegisterScreen'

import Color from './configs/Color'
import Styles from './styles/App'
import AppDrawer from './components/element/AppDrawer'

export default AppNavigator = StackNavigator({
    Landing: { screen: LandingScreen },
    Login : { screen: LoginScreen },
    Register : { screen: RegisterScreen },
    Shop: { screen: ShopScreen },
    Search: { screen: SearchScreen },
    Category: { screen: CategoryScreen },
    Product: { screen: ProductScreen },
    Cart: { screen: CartScreen },
    Favorite: { screen: FavoriteScreen },
    Profile: { screen: ProfileScreen }
}, {
    navigationOptions: {
        header: false
    }
});