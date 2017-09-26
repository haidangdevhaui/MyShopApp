import React, { Component } from 'react'
import { 
    Container, 
    Content,
    View, 
    Icon, 
    Header,
    Button,
    Item,
    Input,
    List,
    ListItem,
    Badge,
    Row,
    Text as TextDefault
 } from 'native-base'
import { Image, ScrollView, ListView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Color from '../../configs/Color'
import Styles from '../../styles/App'
import { Text } from '../../helpers/Component'

class ShopScreen extends Component {

    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var data = Array.apply(null, {length: 8}).map(Number.call, Number);
        console.log(ds.cloneWithRows(data));
        this.state = {
            dataSource: ds.cloneWithRows(data),
            data: [{key: 1},{key: 2},{key: 3},{key: 4}]
        };
    }

    loadMore() {
        let data = this.state.data.push({key: 5});
        this.setState({data: data});
    }

    render() {
        return (
            <Container>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{justifyContent: 'center', height: 100, backgroundColor: 'red'}}>
                        <Text style={{textAlign: 'center', fontFamily: 'OpenSans-Light'}}>Slider</Text>
                    </View>
                    <View style={{height: 100, backgroundColor: '#FFF'}}>
                        <View style={{flexDirection: 'row'}}>
                            <TextDefault style={[Styles.titleBox, {flex: 1}]}>TÌM KIẾM PHỔ BIẾN</TextDefault>
                        </View>
                        <FlatList 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={[{key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}]}
                            renderItem={() => <Row style={{backgroundColor: 'red', width: 70, height: 60, margin: 5}}/>}
                        />
                    </View>
                    <View style={{height: 150, backgroundColor: '#FFF', marginTop: 7}}>
                        <View style={{flexDirection: 'row'}}>
                            <TextDefault style={[Styles.titleBox, {flex: 1, color: 'red'}]}>FLASH SALE</TextDefault>
                            <TextDefault style={Styles.viewMore}>Xem tất cả</TextDefault>
                        </View>
                        <FlatList 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={[{key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}]}
                            renderItem={() => <Row style={{backgroundColor: 'red', width: 90, height: 110, margin: 5}}/>}
                        />
                    </View>
                    <View style={{height: 150, backgroundColor: '#FFF', marginTop: 7}}>
                        <View style={{flexDirection: 'row'}}>
                            <TextDefault style={[Styles.titleBox, {flex: 1}]}>SẢN PHẨM PHỔ BIẾN</TextDefault>
                            <TextDefault style={Styles.viewMore}>Xem thêm</TextDefault>
                        </View>
                        <FlatList 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={[{key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}]}
                            renderItem={() => <Row style={{backgroundColor: 'red', width: 90, height: 110, margin: 5}}/>}
                        />
                    </View>
                    <View style={{height: 150, backgroundColor: '#FFF', marginTop: 7}}>
                        <TextDefault style={Styles.titleBox}>DANH MỤC</TextDefault>
                    </View>
                    <View style={{marginTop: 10, flex: 1}}>
                        <View style={{flexDirection: 'row'}}>
                            <TextDefault style={[Styles.titleBox, {flex: 1}]}>MUA GÌ HÔM NAY</TextDefault>
                            <TextDefault style={Styles.viewMore}>Xem thêm</TextDefault>
                        </View>
                        {/* <ListView 
                            style={{padding: 2.5}}
                            pageSize={4}
                            contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
                            dataSource={this.state.dataSource}
                            renderRow={() => <Row style={{backgroundColor:'red', width: 172, height: 200, margin: 2.5}}/>}
                        /> */}
                        <FlatList
                            data={this.state.data}
                            style={{padding: 2.5}}
                            numColumns={2}
                            contentContainerStyle={{flexDirection: 'column'}}
                            renderItem={() => <Row style={{backgroundColor:'red', width: 172, height: 200, margin: 2.5}}/>}
                        />
                        <Button bordered danger full style={{backgroundColor: '#FFF', margin: 10, marginBottom: 100, borderRadius: 5}} onPress={() => this.loadMore()}>
                            <Text>Xem thêm</Text>
                        </Button>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

export default connect()(ShopScreen);