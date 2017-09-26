import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Footer, FooterTab, Icon, Button, Badge } from 'native-base'
import { goToScreen } from '../../actions/NavigationAction'
import Color from '../../configs/Color'
import { Text } from '../../helpers/Component'

class AppFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShop: true,
            isCart: false,
            isFavorite: false,
            isSearch: false,
            isProfile: false,
        }
    }

    navigate(screen) {
        for (var state in this.state) {
            this.setState({[state]: false});
        }
        this.props.goToScreen(screen);
        this.setState({['is' + screen]: true});
    }

    render() {
        return (
            <Footer>
                <FooterTab style={{ backgroundColor: Color.main }}>
                    <Button vertical onPress={() => this.navigate('Shop')}>
                        <Icon name="ios-home-outline" style={{ color: this.state.isShop ? 'red' : '#000' }}/>
                        <Text style={{ color: this.state.isShop ? 'red' : '#000' }}>Home</Text>
                    </Button>
                    <Button badge vertical onPress={() => this.navigate('Cart')}>
                        <Badge><Text>{this.props.cart.length}</Text></Badge>
                        <Icon name="ios-cart-outline" style={{ color: this.state.isCart ? 'red' : '#000' }}/>
                        <Text style={{ color: this.state.isCart ? 'red' : '#000' }}>Giỏ hàng</Text>
                    </Button>
                    <Button vertical onPress={() => this.navigate('Favorite')}>
                        <Icon active name="ios-star-outline" style={{ color: this.state.isFavorite ? 'red' : '#000' }}/>
                        <Text style={{ color: this.state.isFavorite ? 'red' : '#000' }}>Yêu thích</Text>
                    </Button>
                    <Button vertical onPress={() => this.navigate('Profile')}>
                        <Icon name="ios-person-outline" style={{ color: this.state.isProfile ? 'red' : '#000' }}/>
                        <Text style={{ color: this.state.isProfile ? 'red' : '#000' }}>Tôi</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    cart: state.cart
})

const mapDispatchToProps = {
    goToScreen
}

export default connect(mapStateToProps, mapDispatchToProps)(AppFooter);