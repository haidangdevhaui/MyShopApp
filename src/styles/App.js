import Color from '../configs/Color'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    loginScreen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#54b39a',
        padding: 10
    },
    loginForm: {

    },
    goToLoginButton: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    drawerBox: {
        borderColor: '#434343',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginLeft: -30,
        width: 130,
        height: 30,
        alignSelf: 'center'
    },
    searchBox: {
        color: 'red',
        backgroundColor: '#E8E9EB',
        borderRadius: 5,
        fontFamily: 'OpenSans-Light',
        fontSize: 13
    },
    titleBox: {
        margin: 10, 
        fontFamily: 'OpenSans-Light',
        color: '#000'
    },
    viewMore: {
        fontSize: 11, 
        color: 'red', 
        flex: 0.3, 
        textAlign: 'right', 
        margin: 10,
        marginTop: 15
    },
});