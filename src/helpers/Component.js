import React, { Component } from 'react'
import { Image } from 'react-native'
import { Text as TextDefault } from 'native-base'

export class Text extends Component {
    render() {
        return (
            <TextDefault style={[this.props.style, {fontFamily: 'OpenSans-Regular'}]}>
                { this.props.children }
            </TextDefault>
        )
    }
}

export class SaleBadge extends Component {
    render() {
        return (
            <Image source={{uri: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506910746/myshop/static_images/badge.png'}} style={{position: 'absolute', top: -3, right: -4, width: 40, height: 40, flex: 1, zIndex: 1000}}>
                <Text style={{flex: 1, color: 'red', textAlign: 'center', fontSize: 11, padding: 2}}>
                    {this.props.data}%
                </Text>
                <Text style={{flex: 1, color: '#FFF', textAlign: 'center', fontSize: 11, padding: 2, marginBottom: 8}}>
                    GIẢM
                </Text>
            </Image>
        )
    }
}

export class FavoryBadge extends Component {
    render() {
        return (
            <Image 
                source={{uri: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506920309/myshop/static_images/favory_badge.png'}} 
                style={{position: 'absolute', top: 5, left: 0, width: 70, height: 20, zIndex: 1000}}
            />
        )
    }
}