import React, { Component } from 'react'
import { Container, Header, Content, Button, Text, View } from 'native-base'
import RegisterForm from './RegisterForm'
import AppStyle from '../../../styles/App'

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Đăng ký'
    }

    render() {
        return (
            <View style={{flex: 1, padding: 10, backgroundColor: '#FFF'}}>
                <RegisterForm/>
            </View>
        )
    }
}
