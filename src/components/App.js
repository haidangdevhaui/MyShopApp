import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import AppStackNavigator from '../routes/AppStackNavigator';

class App extends Component {
    render() {
        return (
            <AppStackNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
            })} />
        )
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(App);