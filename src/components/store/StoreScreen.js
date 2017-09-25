import React, { Component } from 'react'
import { 
    Container, 
    View, 
    Text, 
    Icon, 
    Header,
    Left
 } from 'native-base'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import Color from '../../configs/Color'
import Styles from '../../styles/App'

class StoreScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: <Text style={{textAlign: 'center'}}>Cửa hàng</Text>,
            tabBarLabel: 'Cửa hàng',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-appstore" style={{color: tintColor}}/>
            ),
            headerLeft: <Icon name="md-reorder" style={{marginLeft: 10}} onPress={() => navigation.navigate('DrawerOpen')}/>,
            headerRight: <Icon name="md-appstore" style={{marginRight: 10}}/>,
        }
    }

    render() {
        return (
            <Container>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <Text style={{textAlign: 'center'}}>Cửa hàng</Text>
                </View>
            </Container>
        )
    }
}

export default connect()(StoreScreen);