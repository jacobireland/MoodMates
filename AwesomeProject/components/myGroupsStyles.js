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
    buttonTrack: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 5,
        margin: 10,
        width: 300,
        backgroundColor:'lightblue'
    },
	buttonMovie: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 5,
        margin: 10,
        width: 300,
        backgroundColor:'lightpink'
    },
	buttonBoys: {
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
        width: 55, 
        height: 55,
		borderRadius: 55/2,
		backgroundColor: '#E4ECF1',
		borderColor: '#1F2532',
		borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
		marginTop: 20
    },
    imageStyle: {
        width: 30,
        height: 30,
    }

})
export default styles;