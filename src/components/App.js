import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import { Root, Button, Text } from 'native-base'
import AppNavigator from '../AppRoutes'
import Color from '../configs/Color'
import AppFooter from '../components/element/AppFooter'

class App extends Component {
    render() {
        return (
            <Root>
                <AppNavigator navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state:  this.props.nav
                })} />
                <AppFooter />
            </Root>
        )
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav,
    auth: state.auth
});

export default connect(mapStateToProps)(App);
