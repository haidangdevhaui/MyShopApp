import React, { Component } from 'react'
import {StyleSheet, View, Text, Image} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class SliderBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sliders: [{key: 1},{key: 2},{key: 3},{key: 4}]
        }
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={this.state.sliders.length} />;
    }

    render() {
        let data = this.state.sliders.map((item) => 
            <View key={item.key}>
                <Image style={{flex: 1, width: null, height: null}} resizeMode='cover' source={{uri: 'http://res.cloudinary.com/dg6jnduzv/image/upload/v1506910841/myshop/sliders/slider1.png'}}/>
            </View>
        );
        return (
            <View style={{ height: 100, backgroundColor: '#FB5526'}}>
                <IndicatorViewPager
                    style={{height:100}}
                    indicator={this._renderDotIndicator()}
                >
                    {data}
                </IndicatorViewPager>
            </View>
        )
    }
}
