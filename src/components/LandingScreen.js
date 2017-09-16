import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import FontAwesome, { Icons } from 'react-native-fontawesome'

class LandingScreen extends Component {
    render() {
        return (
            <View style={{justifyContent: 'center', flex: 1}}>
                <Text style={{textAlign: 'center'}}>Landing</Text>
                 <Button title="Đăng nhập"/> 
            </View>
        )
    }
}

export default connect()(LandingScreen);