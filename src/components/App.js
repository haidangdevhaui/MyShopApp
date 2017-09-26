import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import { Root, Button, Text } from 'native-base'
import AppNavigator from '../AppRoutes'
import Color from '../configs/Color'
import AppDrawer from '../components/element/AppDrawer'
import AppFooter from '../components/element/AppFooter'
import AppHeader from '../components/element/AppHeader'
import Drawer from 'react-native-drawer'

class App extends Component {
    render() {
        return (
            <Root>
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    content={<AppDrawer />}
                    openDrawerOffset={140}
                    tapToClose={true}
                    >
                    <AppHeader open={() => this._drawer.open()}/>
                    <AppNavigator navigation={addNavigationHelpers({
                        dispatch: this.props.dispatch,
                        state:  this.props.nav
                    })} />
                    <AppFooter />
                </Drawer>
            </Root>
        )
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav,
    auth: state.auth
});

export default connect(mapStateToProps)(App);
