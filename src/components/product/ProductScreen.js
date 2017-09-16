import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class ProductScreen extends Component {
    render() {
        return (
            <View style={{justifyContent: 'center', flex: 1}}>
                <Text style={{textAlign: 'center'}}>Chi tiết sản phẩm</Text>
            </View>
        )
    }
}

export default connect()(ProductScreen);