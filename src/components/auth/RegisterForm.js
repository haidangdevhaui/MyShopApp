import React, { Component } from 'react'
import { 
    View, 
    Text, 
    TextInput, 
    Button, 
    TouchableOpacity
} from 'react-native'
import FormStyle from '../../styles/Form';
import AppStyle from '../../styles/App';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { 
    Title, 
    NavigationBar, 
    Row
} from '@shoutem/ui'

export default class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            passWord: ''
        }
    }

    onLogin(){
        this.setState({userName: 'lolol'});
    }

    render() {
        return (
            <View>
                <Row style={FormStyle.rowInput}>
                    <FontAwesome style={{
                        color: '#FFF', 
                        marginBottom: 9, 
                        marginLeft: -2, 
                        marginRight: -2
                    }}>{Icons.userCircle}</FontAwesome>
                    <TextInput 
                        style={FormStyle.textInput}
                        selectionColor="#FFF"
                        underlineColorAndroid='transparent'
                        placeholder="Họ tên"
                        placeholderTextColor="#FFF"
                        onChangeText={(userName) => this.setState({userName})}
                        value={this.state.userName}
                    />
                </Row>
                <Row style={FormStyle.rowInput}>
                    <FontAwesome style={{
                        color: '#FFF', 
                        marginBottom: 9, 
                        marginLeft: -2, 
                        marginRight: -2
                    }}>{Icons.envelopeSquare}</FontAwesome>
                    <TextInput 
                        style={FormStyle.textInput}
                        selectionColor="#FFF"
                        underlineColorAndroid='transparent'
                        placeholder="Email"
                        placeholderTextColor="#FFF"
                        onChangeText={(userName) => this.setState({userName})}
                        value={this.state.userName}
                    />
                </Row>
                <Row style={FormStyle.rowInput}>
                    <FontAwesome style={{color: '#FFF', marginBottom: 9}}>{Icons.unlockAlt}</FontAwesome>
                    <TextInput 
                        style={FormStyle.textInput}
                        selectionColor="#FFF"
                        underlineColorAndroid='transparent'
                        placeholder="Mật khẩu"
                        placeholderTextColor="#FFF"
                        onChangeText={(passWord) => this.setState({passWord})}
                        value={this.state.passWord}
                    />
                </Row>
                <TouchableOpacity onPress={() => this.onLogin()} style={FormStyle.btnLogin}>
                    <Text style={{textAlign: 'center', color: '#56b29c'}}>
                        <FontAwesome style={{color: '#56b29c'}}>{Icons.userPlus}</FontAwesome>
                        Đăng ký
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
