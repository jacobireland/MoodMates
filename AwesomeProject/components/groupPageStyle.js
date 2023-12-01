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
        marginTop: 188,
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
        marginTop: -296,
    },

    oliviaMoodIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: -326, 
        height: 0,
    },

    benMoodIconText: {
        fontSize: 18,
        marginTop: -212,
        left: 301,
    },
    
    benMoodIconContainer: {
        justifyContent: 'center',
        left: 276,
        top: -242, 
        height: 0,
    },
    
    justinMoodIconText: {
        fontSize: 18,
        marginTop: -222,
        left: 14
    },
    
    justinMoodIconContainer: {
        justifyContent: 'center',
        top: -252, 
        height: 0,
        right: 4,
    },

    mayaMoodIconText: {
        fontSize: 18,
        marginTop: -102,
        left: 304,
    },
    
    mayaMoodIconContainer: {
        justifyContent: 'center',
        left: 284,
        top: -132, 
        height: 0,
    },

    jacobMoodIconText: {
        fontSize: 18,
        marginTop: -107,
        left: 0
    },
    
    jacobMoodIconContainer: {
        justifyContent: 'center',
        top: -137, 
        height: 0,
        right: 17,
    },

    charlieMoodIconText: {
        fontSize: 18,
        marginTop: 8,
        left: 288,
    },
    
    charlieMoodIconContainer: {
        justifyContent: 'center',
        left: 276,
        top: -22, 
        height: 0,
    },

    anishMoodIconText: {
        fontSize: 18,
        marginTop: -32,
        left: 16
    },
    
    anishMoodIconContainer: {
        justifyContent: 'center',
        top: -62, 
        height: 0,
        right: 4,
    },

    myMoodIconText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 33,
    },
    
    myMoodIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 3, 
        height: 0,
    },


 })

export default groupStyles;