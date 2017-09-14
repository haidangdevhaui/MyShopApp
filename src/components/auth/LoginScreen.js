import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation';
import LoginForm from './LoginForm'
import AppStyle from '../../styles/App';
import { Heading } from '@shoutem/ui';
import { connect } from 'react-redux';

class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Đăng nhập',
    };
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 250, backgroundColor: '#464f5c'}}>
                    
                </View>
                <View style={AppStyle.loginScreen}>
                    <LoginForm/>
                    <Text style={AppStyle.registerLink}>
                        Đăng ký tài khoản
                    </Text>
                </View>
            </View>
        )
    }
}

export default connect()(LoginScreen);