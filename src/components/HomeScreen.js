import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import LoginScreen from './auth/LoginScreen';
import AppTabNavigator from '../routes/AppTabNavigator';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'MyShop'
    }
    
    componentWillMount() {
        if (!this.props.isAuthenticate) {
            
        }
    }
    
    render() {
        return (
            <View style={{justifyContent: 'center', flex: 1}}>
                <Text style={{textAlign: 'center'}}>Welcome!{this.props.user.fullName}</Text>
            </View>
            // <AppTabNavigator navigation={addNavigationHelpers({
            //     dispatch: this.props.dispatch,
            //     state: this.props.nav,
            // })} />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    isAuthenticate: state.auth.isAuthenticate,
    user: state.auth.user
})

export default connect(mapStateToProps)(HomeScreen);