import React, { Component } from 'react'
import { StackNavigator, HeaderBackButton, NavigationActions } from 'react-navigation'
import LoginForm from './LoginForm'
import AppStyle from '../../../styles/App'
import { connect } from 'react-redux'
import { Icon } from 'native-base'
import { goToScreen } from '../../../actions/NavigationAction'
import { login, store, sync } from '../../../actions/AuthAction'
import { NAVIGATE } from '../../../actions/Type'
import { Container, Header, Content, Button, Text, View } from 'native-base'
import Color from '../../../configs/Color'

class LoginScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Đăng nhập',
        headerLeft: <HeaderBackButton onPress={(props) => navigation.dispatch({type: NAVIGATE, screen: 'Landing'}) } />,
    });

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 250, backgroundColor: '#FFF', padding: 10}}>
                    <LoginForm login={this.props.login} goToScreen={this.props.goToScreen} store={this.props.store} sync={this.props.sync}/>
                </View>
                <View style={{flex: 1, backgroundColor: '#f9f2ef', justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}}>Bạn chưa có tài khoản? 
                        <Text style={{color: Color.main}} onPress={() => this.props.goToScreen('Register')}> Đăng ký</Text>
                    </Text>
                </View>
            </View>
        )
    }
}

export default connect((state) => {
    return {
        auth: state.auth
    }
}, { 
    goToScreen, 
    login,
    store,
    sync
})(LoginScreen);