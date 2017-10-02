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
        color: '#FB5526',
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
        fontSize: 12, 
        color: '#FB5526', 
        flex: 0.3, 
        textAlign: 'right', 
        margin: 5,
        marginRight: 10
    },
    flashSaleItem: {
        width: 90, 
        height: 110, 
        margin: 2.5, 
        flex: 1, 
        alignItems: 'center',
        padding: 5
    },
    flashTextProgressBar: {
        color: '#FFF', 
        fontWeight: 'bold', 
        fontSize: 11, 
        position: 'absolute', 
        top: -2, 
        left: 5
    },
    topProductBox: {
        height: 150, 
        backgroundColor: '#FFF', 
        marginTop: 7, 
        padding: 3 
    },
    productBoxItem: {
        backgroundColor:'#FFF', 
        width: 172, 
        height: 245, 
        margin: 2.5,
        alignItems: 'center',
        padding: 10
    },
    productItemImage: {
        width: 130, 
        height: 130
    },
    productItemName: {

    }
});