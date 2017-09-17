import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { View, Text, Button } from 'native-base'
import { connect } from 'react-redux'
import Styles from '../styles/App'

import { goToScreen } from '../actions/NavigationAction'

class LandingScreen extends Component {
    static navigationOptions = { 
        title: false, 
        header: null,
    }

    render() {
        return (
            <View style={{justifyContent: 'center', flex: 1}}>
                <Text style={{textAlign: 'center'}}>Landing</Text>
                <Button full warning style={Styles.goToLoginButton} onPress={() => this.props.goToScreen('Login')}>
                    <Text>Đăng nhập</Text>
                </Button>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    navigation: state.navigation,
});

export default connect(mapStateToProps, { goToScreen })(LandingScreen);