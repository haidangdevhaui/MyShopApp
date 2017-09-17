import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Icon, Button, Text } from 'native-base'
import FormStyle from '../../../styles/Form'
import AppStyle from '../../../styles/App'

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            passWord: ''
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <Item>
                        <Icon name='mail'/>
                        <Input placeholder='Email'/>
                    </Item>
                    <Item>
                        <Icon name='key'/>
                        <Input placeholder='Mật khẩu'/>
                    </Item>
                    <Button block warning style={{marginTop: 10}} onPress={() => this.props.onLogin(this.state)}>
                        <Text>Đăng nhập</Text>
                    </Button>
                    <Text style={{textAlign: 'center', marginTop: 30}}>Quên mật khẩu?</Text>
                </Content>
            </Container>
        );
    }
}
