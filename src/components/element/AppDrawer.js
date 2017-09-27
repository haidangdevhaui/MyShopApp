import React, { Component } from 'react'
import { Content, Container, View, Text, Icon, Thumbnail } from 'native-base'
import { FlatList, Image } from 'react-native'
import Styles from '../../styles/App'
import Color from '../../configs/Color'

export default class AppDrawer extends Component {

    render() {
        return (
            <Container>
                <View style={{flex: 1}}>
                    <View style={{height: 150, backgroundColor: Color.drawerTop, alignItems: 'center'}}>
                        {/* <Thumbnail source={require('../../asset/images/avatar.jpg')} style={{marginTop: 10, borderColor: '#CCC', borderWidth: .5}}/> */}
                        <Text style={{color: '#F7F7F7'}}>John Wick</Text>
                        <Text style={{color: '#F7F7F7', fontSize: 11}}>johnwick@mafia.com</Text>
                    </View>
                    <FlatList />
                </View>
            </Container>
        )
    }
}
