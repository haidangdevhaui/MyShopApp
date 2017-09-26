import React, { Component } from 'react'
import { 
    Container, 
    Content,
    View, 
    Text, 
    Icon, 
    Header,
    Left,
    Tabs,
    Tab,
    SwipeRow,
    Button,
    Item,
    Input
 } from 'native-base'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import Color from '../../configs/Color'
import Styles from '../../styles/App'

class SearchScreen extends Component {

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="md-apps" />
                    </Item>
                    <Button transparent>
                        <Text>Tìm</Text>
                    </Button>
                </Header>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <Text style={{textAlign: 'center'}}>Tìm kiếm sản phẩm</Text>
                </View>
            </Container>
        )
    }
}

export default connect()(SearchScreen);