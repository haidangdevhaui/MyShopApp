import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import FontAwesome, { Icons } from 'react-native-fontawesome'

class CartScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Giỏ hàng',
        tabBarIcon: ({ tintColor }) => (
            <FontAwesome style={{fontSize: 24}}>{Icons.cartArrowDown}</FontAwesome>
        ),
    }

    render() {
        return (
            <View style={{justifyContent: 'center', flex: 1}}>
                <Text style={{textAlign: 'center'}}>Giỏi hàng</Text>
            </View>
        )
    }
}

export default connect()(CartScreen);