import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import FontAwesome, { Icons } from 'react-native-fontawesome'

class StoreScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Cửa hàng',
        tabBarIcon: ({ tintColor }) => (
            <FontAwesome style={{fontSize: 24}}>{Icons.shoppingBag}</FontAwesome>
        ),
    }

    goToProduct() {
        
    }

    render() {
        return (
            <View style={{justifyContent: 'center', flex: 1}}>
                <Text style={{textAlign: 'center'}}>Cửa hàng</Text>
            </View>
        )
    }
}

export default connect()(StoreScreen);