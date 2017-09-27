import React, { Component } from 'react'
import { View, Text as TextDefault, FlatList } from 'react-native'
import { Button, Row, Grid, Icon, Badge } from 'native-base'
import update from 'immutability-helper'
import { Text } from '../../helpers/Component'
import Styles from '../../styles/App'

export default class ProductBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [{key: 1},{key: 2},{key: 3},{key: 4}]
        }
    }

    loadMore() {
        this.setState({products: update(this.state.products, {$push: [{key: 5}, {key: 6}, {key: 7}, {key: 8}]})});
    }

    render() {
        return (
            <View style={{marginTop: 10, flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <TextDefault style={[Styles.titleBox, {flex: 1, color: '#FF5A26'}]}>{this.props.title}</TextDefault>
                    <TextDefault style={Styles.viewMore}>Xem thêm</TextDefault>
                </View>
                <FlatList
                    data={this.state.products}
                    style={{padding: 2.5}}
                    numColumns={2}
                    contentContainerStyle={{flexDirection: 'column'}}
                    renderItem={() => <View style={{backgroundColor:'red', width: 172, height: 200, margin: 2.5}}/>}
                />
                <Button bordered danger full style={{backgroundColor: '#FFF', margin: 10, marginBottom: 100, borderRadius: 5}} onPress={() => this.loadMore()}>
                    <Text>Xem thêm</Text>
                </Button>
            </View>
        )
    }
}
