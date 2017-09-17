import React, { Component } from 'react'
import { 
    View, 
    Container, 
    Content, 
    Form, 
    Item, 
    Input, 
    Label, 
    Icon, 
    Button, 
    Text,
    Picker
} from 'native-base'
import FormStyle from '../../../styles/Form';
import AppStyle from '../../../styles/App';

export default class RegisterForm extends Component {
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
                        <Input placeholder='Họ'/>
                        <Input placeholder='Tên'/>
                    </Item>
                    <Item>
                        <Input placeholder='DD'/>
                        <Input placeholder='MM'/>
                        <Input placeholder='YYYY'/>
                    </Item>
                    <Picker
                        mode="dropdown"
                        headerBackButtonText="Baaack!"
                        >
                        <Item label="Nam" value={1} />
                        <Item label="Nữ" value={0} />
                    </Picker>
                    <Item>
                        <Input placeholder='Email'/>
                    </Item>
                    <Item>
                        <Input placeholder='Mật khẩu'/>
                    </Item>
                    <Item>
                        <Input placeholder='Nhập lại mật khẩu'/>
                    </Item>
                    <Button block warning style={{marginTop: 10}}>
                        <Text>Đăng ký</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}
