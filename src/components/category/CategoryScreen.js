import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class CategoryScreen extends Component {
    render() {
        return (
            <View style={{justifyContent: 'center', flex: 1}}>
                <Text style={{textAlign: 'center'}}>Danh mục sản phẩm</Text>
            </View>
        )
    }
}

export default connect()(CategoryScreen);