import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import { Root, Header } from 'native-base'
import AppNavigator from '../AppRoutes'
import Color from '../configs/Color'

class App extends Component {
    
    componentWillMount() {
        
    }
    
    render() {
        return (
            <Root>
                <AppNavigator navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state:  this.props.nav
                })} />
            </Root>
        )
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav,
    auth: state.auth
});

export default connect(mapStateToProps)(App);
