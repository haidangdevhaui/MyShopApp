import { StackNavigator } from 'react-navigation';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';

export default AppStackNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
});