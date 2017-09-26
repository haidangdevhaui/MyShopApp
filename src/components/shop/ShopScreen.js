import React, { Component } from 'react'
import { 
    Container, 
    Content,
    View, 
    Icon, 
    Header,
    Left,
    Right,
    Tabs,
    Tab,
    SwipeRow,
    Button,
    Item,
    Input
 } from 'native-base'
import { Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Color from '../../configs/Color'
import Styles from '../../styles/App'
import { Text } from '../../helpers/Component'

class ShopScreen extends Component {

    render() {
        return (
            <Container>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{justifyContent: 'center', height: 100, backgroundColor: '#F0AD4E'}}>
                        <Text style={{textAlign: 'center', fontFamily: 'OpenSans-Light'}}>Slider</Text>
                    </View>
                    <View style={{height: 100, backgroundColor: '#FFF'}}>
                        <Text style={{margin: 10}}>TÌM KIẾM PHỔ BIẾN</Text>
                        <Right>
                            
                        </Right>
                    </View>
                    <View style={{height: 150, backgroundColor: '#FFF', marginTop: 10}}>
                        <Text style={{margin: 10}}>FLASH SALE</Text>
                    </View>
                    <View style={{height: 150, backgroundColor: '#FFF', marginTop: 10}}>
                        <Text style={{margin: 10}}>SẢN PHẨM PHỔ BIẾN</Text>
                    </View>
                    <View style={{height: 150, backgroundColor: '#FFF', marginTop: 10}}>
                        <Text style={{margin: 10}}>DANH MỤC</Text>
                    </View>
                    <View style={{backgroundColor: '#FFF', marginTop: 10, flex: 1}}>
                        <Text style={{margin: 10}}>MUA GÌ HÔM NAY</Text>
                        <Button bordered danger full style={{margin: 10, marginBottom: 100, borderRadius: 5}}>
                            <Text>Xem thêm</Text>
                        </Button>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

export default connect()(ShopScreen);