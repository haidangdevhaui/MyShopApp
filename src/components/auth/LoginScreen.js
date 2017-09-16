import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation';
// import LoginForm from './LoginForm'
import AppStyle from '../../styles/App';
// import { Heading } from '@shoutem/ui';
import { connect } from 'react-redux';

class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Đăng nhập',
    };
    render() {
        return (
            <View>
                <Text>Đăng nhập</Text>
            </View>
        )
    }
}

export default connect()(LoginScreen);