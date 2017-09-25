import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import { Root } from 'native-base'
import AppNavigator from '../AppRoutes'
import Color from '../configs/Color'

class App extends Component {

    render() {
        return (
            <Root>
                <AppNavigator navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state:  this.props.nav
                })}/>
            </Root>
        )
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav,
    auth: state.auth
});

export default connect(mapStateToProps)(App);
