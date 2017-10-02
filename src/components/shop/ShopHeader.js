import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-native'
import { Header, Left, Icon, Text, Item, Input, Button } from 'native-base'
import Styles from '../../styles/App'
import { getRouteName } from '../../helpers/Navigation'
import Color from '../../configs/Color'

class AppHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let routeName = getRouteName(this.props.nav);
        return (
            <Header searchBar rounded style={{backgroundColor: Color.main}}>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Shop" style={Styles.searchBox} placeholderTextColor="red"/>
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
                <Icon name="ios-cart-outline" style={{ color: '#FB5526', margin: 11 }}/>
                <Icon name="ios-chatbubbles-outline" style={{ color: '#FB5526', marginTop: 11, marginRight: 2 }}/>
            </Header>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    nav: state.nav
})

export default connect(mapStateToProps)(AppHeader)