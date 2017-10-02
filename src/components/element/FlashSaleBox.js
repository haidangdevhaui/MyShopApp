import React, { Component } from 'react'
import { View, Text, FlatList, Image, ScrollView, fetch } from 'react-native'
import { Icon } from 'native-base'
import { Bar } from 'react-native-progress'
import Styles from '../../styles/App'
import { SaleBadge } from '../../helpers/Component'
import { numberFormat } from '../../helpers/Util'

export default class FlashSaleBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [
                {id: 1, sale: 20, price: 100000, image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg', total: 10, selled: 8}, 
                {id: 2, sale: 20, price: 100000, image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg', total: 10, selled: 1}, 
                {id: 3, sale: 20, price: 100000, image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg', total: 10, selled: 2}, 
                {id: 4, sale: 20, price: 100000, image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg', total: 10, selled: 3}, 
                {id: 5, sale: 20, price: 100000, image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg', total: 10, selled: 4}, 
                {id: 6, sale: 20, price: 100000, image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg', total: 10, selled: 5}, 
                {id: 7, sale: 20, price: 100000, image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg', total: 10, selled: 6}
            ]
        }
    }

    render() {
        return (
            <View style={Styles.topProductBox}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[Styles.titleBox, {flex: 1, color: '#FB5526', margin: 5}]}>
                        <Text style={{fontFamily: 'OpenSans-Bold'}}>
                            F<Icon name="ios-flash" style={{fontSize: 16, color: '#FB5526'}}/>ASH
                        </Text> 
                        &nbsp;SALE
                    </Text>
                    <Text style={Styles.viewMore}>Xem tất cả</Text>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <FlatList 
                        style={{padding: 2.5}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.products}
                        keyExtractor={(item, index) => index}
                        renderItem={({item}) => (
                            <View style={Styles.flashSaleItem}>
                                <SaleBadge data={item.sale}/>
                                <Image style={{height: 50, width: 70}} source={{uri: item.image}}/>
                                <Text style={{color: '#FB5526', textAlign: 'center'}}>
                                    <Text>₫</Text>
                                    <Text style={{fontWeight:'bold', fontSize: 12}}>{numberFormat(item.price)}</Text>
                                </Text>
                                <Bar 
                                    progress={item.selled / item.total} 
                                    width={70} 
                                    height={12} 
                                    borderRadius={5}
                                    borderColor="red"
                                    color="red"
                                    unfilledColor="#FFC2AD" 
                                    style={{marginTop: 5}}
                                >
                                    <Text style={Styles.flashTextProgressBar}>ĐÃ BÁN {item.selled}</Text>
                                </Bar>
                            </View>
                        )}
                    />
                    <View style={[Styles.flashSaleItem, {backgroundColor: '#ECECEC', justifyContent: 'center', alignContent: 'center', width: 70}]}>
                        <Icon name="ios-arrow-dropright" style={{color: 'red', marginBottom: 3}}/>
                        <Text style={{color: 'red', fontSize: 11}}>Xem thêm</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
