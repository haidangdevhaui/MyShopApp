import { TabNavigator, StackNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation'
import { Icon } from 'native-base'
import StoreScreen from './components/store/StoreScreen'
import CartScreen from './components/cart/CartScreen'
import CategoryScreen from './components/category/CategoryScreen'
import ProductScreen from './components/product/ProductScreen'
import ProfileScreen from './components/user/ProfileScreen'

import LandingScreen from './components/LandingScreen'
import LoginScreen from './components/auth/login/LoginScreen'
import RegisterScreen from './components/auth/register/RegisterScreen'

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
        }) 
    }
})