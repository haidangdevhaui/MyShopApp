import React from 'react'
import { TabNavigator, StackNavigator, TabBarBottom, DrawerNavigator, DrawerItems } from 'react-navigation'
import { Tabs, Tab, Icon, TabHeading, FooterTab } from 'native-base'
import AppDrawer from './components/element/AppDrawer'
import StoreScreen from './components/store/StoreScreen'
import CartScreen from './components/cart/CartScreen'
import CategoryScreen from './components/category/CategoryScreen'
import ProductScreen from './components/product/ProductScreen'
import ProfileScreen from './components/user/ProfileScreen'

import LandingScreen from './components/LandingScreen'
import LoginScreen from './components/auth/login/LoginScreen'
import RegisterScreen from './components/auth/register/RegisterScreen'
import Color from './configs/Color'

export default AppNavigator = DrawerNavigator({
    Guest: {
        screen: StackNavigator({
            Landing: { screen: LandingScreen },
            Login: { screen: LoginScreen },
            Register: { screen: RegisterScreen },
        })
    },
    Auth: { 
        screen: TabNavigator({
            Store: { 
                screen: StackNavigator({
                    StoreIndex: { screen: StoreScreen },
                    Category: { screen: CategoryScreen },
                    Product: { screen: ProductScreen },
                }) 
            },
            Cart: { 
                screen: StackNavigator({
                    CartIndex: { screen: CartScreen }
                }) 
            },
            Profile: { 
                screen: StackNavigator({
                    ProfileIndex: { screen: ProfileScreen }
                }) 
            }
        }, {
            tabBarComponent: TabBarBottom,
            tabBarPosition: 'bottom',
            tabBarOptions: {
                activeTintColor: '#FFF',
                inactiveTintColor: '#000',
                style: {
                    backgroundColor: Color.main,
                }
            }
        }) 
    }
}, {
    contentComponent: props => <AppDrawer><DrawerItems {...props} /></AppDrawer>
})