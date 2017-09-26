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

class FavoriteScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: <Text style={{textAlign: 'center'}}>Sản phẩm yêu thích</Text>,
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-star" style={{color: tintColor}}/>
            ),
            headerLeft: <Icon name="md-reorder" style={{marginLeft: 10}} onPress={() => navigation.navigate('DrawerOpen')}/>,
            headerRight: <Icon name="md-appstore" style={{marginRight: 10}}/>,
        }
    }

    render() {
        return (
            <Container>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <Text style={{textAlign: 'center'}}>Sản phẩm yêu thích</Text>
                </View>
            </Container>
        )
    }
}

export default connect()(FavoriteScreen);