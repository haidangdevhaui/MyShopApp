import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Styles from '../../styles/App'

export default class FlashSaleBox extends Component {
    render() {
        return (
            <View style={{height: 150, backgroundColor: '#FFF', marginTop: 7}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[Styles.titleBox, {flex: 1, color: 'red'}]}>FLASH SALE</Text>
                    <Text style={Styles.viewMore}>Xem tất cả</Text>
                </View>
                <FlatList 
                    style={{padding: 2.5}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[{key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}]}
                    renderItem={() => <View style={{backgroundColor: 'red', width: 90, height: 110, margin: 2.5}}/>}
                />
            </View>
        )
    }
}
