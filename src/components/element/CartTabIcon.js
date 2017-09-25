import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'
import { Icon, B } from 'native-base'
import { connect } from 'react-redux'

class CartTabIcon extends Component {
    render() {
        const notifications = [1,2,3];
        return (
            <View style={{
            zIndex: 0,
            flex: 1,
            alignSelf: 'stretch',
            justifyContent: 'space-around',
            alignItems: 'center'}}>
            <Icon name="md-cart" style={{color: this.props.color}}/>
            {notifications.length > 0 ?
            <View style={{
                position: 'absolute',
                top: 1,
                right: 40,
                borderRadius: 50,
                backgroundColor: 'red',
                zIndex: 2}}>
                <Text style={{color: '#FFF', fontSize: 11, paddingLeft: 3, paddingRight: 3}}>{notifications.length}</Text>
            </View>
            : undefined}
            </View>
        )
    }
}

export default connect()(CartTabIcon);