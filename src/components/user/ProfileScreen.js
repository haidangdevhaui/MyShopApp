import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import FontAwesome, { Icons } from 'react-native-fontawesome'

class ProfileScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
            <FontAwesome style={{fontSize: 24}}>{Icons.userCircle}</FontAwesome>
        ),
    }

    goToProduct() {
        
    }

    render() {
        return (
            <View style={{justifyContent: 'center', flex: 1}}>
                <Text style={{textAlign: 'center'}}>Thông tin cá nhân</Text>
            </View>
        )
    }
}

export default connect()(ProfileScreen);