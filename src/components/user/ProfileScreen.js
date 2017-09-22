import React, { Component } from 'react'
import { View, Text, Icon } from 'native-base'
import { connect } from 'react-redux'

class ProfileScreen extends Component {
    static navigationOptions = {
        header: false,
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" style={{color: tintColor}}/>
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