import React, { Component } from 'react'
import { View, Text, Icon } from 'native-base'
import { connect } from 'react-redux'

class ProfileScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: <Text style={{textAlign: 'center'}}>Thông tin cá nhân</Text>,
            tabBarLabel: 'Giỏ hàng',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-person" style={{color: tintColor}}/>
            ),
            headerLeft: <Icon name="md-reorder" style={{marginLeft: 10}} onPress={() => navigation.navigate('DrawerOpen')}/>,
            headerRight: <Icon name="md-person" style={{marginRight: 10}}/>,
        }
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