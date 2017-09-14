import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './src/components/App';
import AppStore from './src/AppStore';


export default class MyShop extends Component {
	render(){
		return (
			<Provider store={AppStore}>
				<App/>
			</Provider>
		);
	}
}
AppRegistry.registerComponent('MyShop', () => MyShop);
