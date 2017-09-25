import React, { Component } from 'react'
import { View, Text, Icon } from 'native-base'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import Styles from '../../styles/App'

class CartScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: <Text style={{textAlign: 'center'}}>Giỏ hàng</Text>,
            tabBarLabel: 'Giỏ hàng',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-cart" style={{color: tintColor}}/>
            ),
            headerLeft: <Icon name="md-reorder" style={{marginLeft: 10}} onPress={() => navigation.navigate('DrawerOpen')}/>,
            headerRight: <Icon name="md-cart" style={{marginRight: 10}}/>,
        }
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