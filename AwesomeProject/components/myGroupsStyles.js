import {StyleSheet} from 'react-native'
import React from "react";
const styles = StyleSheet.create({
    myGroupsTitle: {
        justifyContent: 'left'
    },
    titleText: {
        fontSize: 32,
        fontWeight: 400,
    },
    mainContainer: {
		flex: 1
	},
    
    myGroups: {
        marginTop: 30,
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    button: {
        color: '#8BC7AF',
        alignItems: 'center',
        padding: 20,
        borderRadius: 5,
        margin: 10,
        width: 300,
        backgroundColor:'#97E384'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 400
    },
    imageButton: {
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        width: 50,
        height: 50,
    }

})
export default styles;