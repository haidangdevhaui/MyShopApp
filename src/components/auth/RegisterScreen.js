import React, { Component } from 'react'
import { View, Text } from 'react-native'
import RegisterForm from './RegisterForm'
import AppStyle from '../../styles/App';
import { Heading } from '@shoutem/ui'

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Đăng ký'
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 250, backgroundColor: '#464f5c'}}>
                    
                </View>
                <View style={AppStyle.loginScreen}>
                    <RegisterForm/>
                    <Text style={AppStyle.registerLink} onPress={() => this.props.navigation.navigate('Login')}>
                        Đăng nhập
                    </Text>
                </View>
            </View>
        )
    }
}
