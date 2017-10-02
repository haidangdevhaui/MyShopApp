import React, { Component } from 'react'
import { View, Text as TextDefault, FlatList, Image } from 'react-native'
import { Button, Row, Grid, Icon, Badge } from 'native-base'
import update from 'immutability-helper'
import StarRating from 'react-native-star-rating'
import { Text, FavoryBadge, SaleBadge } from '../../helpers/Component'
import Styles from '../../styles/App'
import { numberFormat, subProductName } from '../../helpers/Util'

export default class ProductBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [
                {id: 1, sale: 20, rate: 2, total_rate: 50, price: 100000, name: 'product name name name name name', image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg'}, 
                {id: 2, sale: 20, rate: 3, total_rate: 30, price: 100000, name: 'product name', image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg'}, 
                {id: 3, sale: 20, rate: 1, total_rate: 100, price: 100000, name: 'product name', image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg'}, 
                {id: 4, sale: 20, rate: 4.5, total_rate: 60, price: 100000, name: 'product name', image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg'}
            ]
        }
    }

    loadMore() {
        this.setState({products: update(this.state.products, {$push: [{key: 5}, {key: 6}, {key: 7}, {key: 8}]})});
    }

    render() {
        return (
            <View style={{marginTop: 10, flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <TextDefault style={[Styles.titleBox, {flex: 1, color: '#FF5A26', fontFamily: 'OpenSans-Bold', margin: 5}]}>{this.props.title}</TextDefault>
                    <TextDefault style={Styles.viewMore}>
                        Xem thêm
                    </TextDefault>
                </View>
                <FlatList
                    data={this.state.products}
                    style={{padding: 2.5}}
                    numColumns={2}
                    contentContainerStyle={{flexDirection: 'column'}}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => (
                        <View style={Styles.productBoxItem}>
                            <SaleBadge data={item.sale}/>
                            <FavoryBadge/>
                            <Image source={{uri: item.image}} style={Styles.productItemImage}/>
                            <TextDefault style={{height: 40, color: '#000'}}>{subProductName(item.name, 50)}</TextDefault>
                            <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
                                <TextDefault style={{flex: 1, textDecorationLine: 'line-through'}}>₫ {numberFormat(item.price)}</TextDefault>
                                <TextDefault style={{flex: 1, color: 'red'}}>₫ {numberFormat(item.price)}</TextDefault>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
                                <TextDefault style={{flex: 0.7, textAlign: 'left'}}><Icon name="md-heart-outline" style={{fontSize: 14}}/> 1000</TextDefault>
                                <View style={{flex: 1, flexDirection: 'row', padding: 3, paddingRight: 0}}>
                                    <StarRating
                                        disabled={true}
                                        emptyStar={'ios-star-outline'}
                                        fullStar={'ios-star'}
                                        halfStar={'ios-star-half'}
                                        iconSet={'Ionicons'}
                                        maxStars={5}
                                        rating={item.rate}
                                        starColor={'#FE5625'}
                                        starSize={14}
                                        style={{flex: 1}}
                                    />
                                    <TextDefault style={{flex: 1, fontSize: 11}}>({item.total_rate})</TextDefault>
                                </View>
                            </View>
                        </View>
                    )}
                />
                <Button bordered danger full style={{backgroundColor: '#FFF', margin: 10, marginBottom: 100, borderRadius: 5}} onPress={() => this.loadMore()}>
                    <Text>Xem thêm</Text>
                </Button>
            </View>
        )
    }
}
