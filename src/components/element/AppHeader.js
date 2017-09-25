import React, { Component } from 'react'
import { Image } from 'react-native'
import { Header, Left, Icon } from 'native-base'
import Styles from '../../styles/App'

class AppHeader extends Component {    
    render() {
        return (
            <Header style={{backgroundColor: '#FFF' }}>
                <Left style={{position: 'absolute', left: 10}}>
                    <Icon name="md-reorder" onPress={() => this.props.open.navigate('DrawerOpen')}/>
                </Left>
                <Image source={require('./images/logo.png')} style={Styles.logo}/>
            </Header>
        );
    }
}

export default AppHeader