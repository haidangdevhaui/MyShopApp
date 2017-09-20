import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { AppNavigator, LandingNavigator } from '../AppRoutes';

class App extends Component {
    render() {

        console.log(this.props.auth);
        
        return (
            !this.props.auth.isAuthenticate 
            ? <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state:  this.props.nav
            })} />
            : <LandingNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state:  this.props.land
            })} />
        )
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav,
    land: state.land,
    auth: state.auth
});

export default connect(mapStateToProps)(App);