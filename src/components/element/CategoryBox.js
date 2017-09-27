import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import { Row, Grid, Col } from 'native-base'
import Styles from '../../styles/App'

export default class CategoryBox extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    id: 1,
                    name: 'Thời trang',
                    image: '../../../assets/images/ao.jpg'
                },
                {
                    id: 2,
                    name: 'Xe máy',
                    image: '../../../assets/images/bike.jpg'
                },
                {
                    id: 3,
                    name: 'Đồng hồ',
                    image: '../../../assets/images/dongho.jpg'
                },
                {
                    id: 4,
                    name: 'Máy tính',
                    image: '../../../assets/images/imac.jpg'
                },
                {
                    id: 5,
                    name: 'Phụ kiện',
                    image: '../../../assets/images/loa.jpg'
                },
                {
                    id: 6,
                    name: 'Máy ảnh',
                    image: '../../../assets/images/mayanh.jpeg'
                },
                {
                    id: 7,
                    name: 'Điện thoại',
                    image: '../../../assets/images/phone.jpg'
                },
                {
                    id: 8,
                    name: 'Đồ chơi',
                    image: '../../../assets/images/toy.jpg'
                },
            ]
        }
    }
    
    render() {
        let temp = [];
        let categories = this.state.categories.map((item, index) => {
            temp.push(
                <View style={{height: 110, width: 90, margin: 2.5}} key={item.id}>
                    <Image source={{uri: item.image}} style={{width: 90, height: 60}}/>
                    <Text style={{textAlign: 'center', padding: 5}}>{item.name}</Text>
                </View>
            );
            if (index % 2 == 1) {
                let grid = (
                    <Grid style={{flexDirection: 'column'}} key={item.id}>
                        { temp }
                    </Grid>
                )
                temp = [];
                return grid;
            }
            if (index == this.state.categories.length - 1 && temp.length != 0) {
                return (
                    <Grid style={{flexDirection: 'column'}} key={item.id}>
                        { temp }
                    </Grid>
                )
            }
        });
        return (
            <View style={{backgroundColor: '#FFF', marginTop: 7}}>
                <Text style={Styles.titleBox}>DANH MỤC</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{padding: 2.5}}>
                    { categories }
                </ScrollView>
            </View>
        )
    }
}
