import React, { Component } from 'react'
import { Container, Content, View, Icon, Header, Button, Item, Input, List, ListItem, Badge, Row, Text as TextDefault } from 'native-base'
import { Image, ScrollView, ListView, FlatList } from 'react-native'
import { connect } from 'react-redux'

import Color from '../../configs/Color'
import Styles from '../../styles/App'
import { Text } from '../../helpers/Component'
import ShopHeader from './ShopHeader'
import SliderBox from '../element/SliderBox'
import CategoryBox from '../element/CategoryBox'
import ProductBox from '../element/ProductBox'
import FlashSaleBox from '../element/FlashSaleBox'

class ShopScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [{key: 1},{key: 2},{key: 3},{key: 4}]
        }
    }

    render() {
        return (
            <Container>
                <ShopHeader />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SliderBox/>
                    <View style={{height: 100, backgroundColor: '#FFF'}}>
                        <View style={{flexDirection: 'row'}}>
                            <TextDefault style={[Styles.titleBox, {flex: 1}]}>TÌM KIẾM PHỔ BIẾN</TextDefault>
                        </View>
                        <FlatList 
                            style={{padding: 2.5}}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={[{key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}]}
                            renderItem={() => <View style={{backgroundColor: 'red', width: 70, height: 60, margin: 2.5}}/>}
                        />
                    </View>
                    <FlashSaleBox />
                    <View style={{height: 150, backgroundColor: '#FFF', marginTop: 7}}>
                        <View style={{flexDirection: 'row'}}>
                            <TextDefault style={[Styles.titleBox, {flex: 1}]}>SẢN PHẨM PHỔ BIẾN</TextDefault>
                            <TextDefault style={Styles.viewMore}>Xem thêm</TextDefault>
                        </View>
                        <FlatList 
                            style={{padding: 2.5}}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={[{key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}]}
                            renderItem={() => <View style={{backgroundColor: 'red', width: 90, height: 110, margin: 2.5}}/>}
                        />
                    </View>
                    <CategoryBox/>
                    <ProductBox title="MUA GÌ HÔM NAY"/>
                </ScrollView>
            </Container>
        )
    }
}

export default connect()(ShopScreen);