import React, { Component } from 'react'
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