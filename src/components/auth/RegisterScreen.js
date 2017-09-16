import React, { Component } from 'react'
import { View, Text } from 'react-native'
// import RegisterForm from './RegisterForm'
import AppStyle from '../../styles/App';
// import { Heading } from '@shoutem/ui'

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Đăng ký'
    }

    render() {
        return (
            <View>
                <Text>Đăng ký</Text>
            </View>
        )
    }
}
