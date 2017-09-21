import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Content, Item, Input, Icon, Button, Text, Toast } from 'native-base'
import FormStyle from '../../../styles/Form'
import AppStyle from '../../../styles/App'

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    /**
     * login event
     */
    async login() {
        let { data } = await this.props.login(this.state);

        if (data.success) {
            let { api_token } = data.data;
            this.props.store(api_token);
            this.props.sync();
            this.props.goToScreen('StoreIndex');
        } else {
            Toast.show({
                text: data.error_message,
                type: 'warning',
                position: 'bottom',
                buttonText: 'OK'
            });
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <Item>
                        <Icon name='mail'/>
                        <Input name="email" placeholder='Email' onChangeText={(text) => this.setState({email: text})}/>
                    </Item>
                    <Item>
                        <Icon name='key'/>
                        <Input password name="password" placeholder='Mật khẩu' onChangeText={(text) => this.setState({password: text})}/>
                    </Item>
                    <Button block warning style={{marginTop: 10}} onPress={() => this.login()}>
                        <Text>Đăng nhập</Text>
                    </Button>
                    <Text style={{textAlign: 'center', marginTop: 30}}>Quên mật khẩu?</Text>
                </Content>
            </Container>
        );
    }
}
