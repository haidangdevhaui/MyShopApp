import React, { Component } from 'react'
import { View, Text, Icon } from 'native-base'
import { connect } from 'react-redux'

class CartScreen extends Component {
    static navigationOptions = {
        header: false,
        tabBarLabel: 'Giỏ hàng',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-cart" style={{color: tintColor}}/>
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