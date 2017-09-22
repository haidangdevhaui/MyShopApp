import React, { Component } from 'react'
import { Content, Container, View, Text, Row, Grid, Col } from 'native-base'
import Styles from '../../styles/App'

export default class AppDrawer extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Row size={2}>
                        <Col size={2} style={{ backgroundColor: '#635DB7'}}></Col>
                        <Col size={2} style={{ backgroundColor: '#00CE9F'}}></Col>
                    </Row>
                </Row>
                <Row>
                    
                </Row>
            </Grid>
        )
    }
}
