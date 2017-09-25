import React, { Component } from 'react'
import { Content, Container, View, Text, Row, Grid, Col, Icon } from 'native-base'
import { FlatList, Image } from 'react-native'
import Styles from '../../styles/App'
import Color from '../../configs/Color'

export default class AppDrawer extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 150, backgroundColor: Color.main}}>
                </View>
                <FlatList />
            </View>
        )
    }
}
