import React, { Component } from 'react'
import { 
    Container, 
    View, 
    Text, 
    Icon, 
    Header,
    Left
 } from 'native-base'
import { connect } from 'react-redux'
import Color from '../../configs/Color'

class StoreScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Cửa hàng',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-appstore" style={{color: tintColor}}/>
        ),
        header: false,
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: '#FFF' }}>
                    <Left style={{position: 'absolute', left: 10}}>
                        <Icon name="md-reorder" onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
                    </Left>
                </Header>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <Text style={{textAlign: 'center'}}>Cửa hàng</Text>
                </View>
            </Container>
        )
    }
}

export default connect()(StoreScreen);