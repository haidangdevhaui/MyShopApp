import React, { Component } from 'react'
import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import { Icon } from 'native-base'
import Styles from '../../styles/App'
import { SaleBadge } from '../../helpers/Component'
import { numberFormat, subProductName } from '../../helpers/Util'

export default class TopProductBox extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {id: 1, sale: 20, price: 100000, name: 'product name name name', image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg'}, 
                {id: 2, sale: 20, price: 100000, name: 'product name', image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg'}, 
                {id: 3, sale: 20, price: 100000, name: 'product name', image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg'}, 
                {id: 4, sale: 20, price: 100000, name: 'product name', image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg'}, 
                {id: 5, sale: 20, price: 100000, name: 'product name', image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg'}, 
                {id: 6, sale: 20, price: 100000, name: 'product name', image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg'}, 
                {id: 7, sale: 20, price: 100000, name: 'product name', image: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506566292/myshop/category/phone.jpg'}
            ]
        }
    }

    render() {
        return (
            <View style={Styles.topProductBox}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[Styles.titleBox, {flex: 1, margin: 5}]}>
                        <Text>
                            SẢN PHẨM PHỔ BIẾN
                        </Text>
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
                                <Text style={{fontSize: 11}}>{subProductName(item.name)}</Text>
                                <Text style={{color: '#FB5526', textAlign: 'center', position: 'absolute', bottom: 2}}>
                                    <Text style={{fontSize: 11}}>₫</Text>
                                    <Text style={{fontSize: 11}}>{numberFormat(item.price)}</Text>
                                </Text>
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
