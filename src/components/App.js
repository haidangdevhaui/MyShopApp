import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { AppNavigator, LandingNavigator } from '../AppRoutes';

class App extends Component {
    render() {
        return (
            <LandingNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.land,
            })} />
        )
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav,
    land: state.land
});

export default connect(mapStateToProps)(App);