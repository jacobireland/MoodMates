import {StyleSheet} from 'react-native'

const groupStyles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: 'lightgray',
	},

    appContent: {
		marginTop: 81,
		marginLeft: 30,
		marginRight: 30,
		flex: 1,
	},

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginTop: 0, 
    },

    headerText: {
        fontSize: 32,
        textAlign: 'center',
        marginTop: 0,  
    },

    icon: {
        width: 24,
        height: 24,
    },

    rectangle: {
        width: 225,
        height: 93,
        marginTop: 25,
        borderRadius: 15,
        backgroundColor: 'lightgray', // Set your desired background color
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },

    groupMoodText: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 68, // Adjust the marginBottom to leave room for other content 67
    },


    moodIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50, 
        height: 0,
    },

    card: {
        width: 138,
        height: 204,
        backgroundColor: '#C0EDDA',
        borderRadius: 15,
        marginTop: 190,
        alignSelf: 'center', 
        borderWidth: 1,
        borderColor: 'black',
    },

    proposeActivityText: {
        fontSize: 18,
        textAlign: 'center', 
        marginTop: 30, 
        lineHeight: 24,
    },

    addIcon: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginTop: 42, 
      },
    

    moodIconTextContainer: {
        marginTop: 10, // Adjust this value based on your preference
    },


    oliviaMoodIconText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: -295,
    },

    oliviaMoodIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: -325, 
        height: 0,
    },


 })

export default groupStyles;