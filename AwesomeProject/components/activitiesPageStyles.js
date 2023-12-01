import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    mainContainer: {
		flex: 1
	},

    headingContainer: {
        flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20
	},

	backArrow: {
		width: 27,
		height: 27,
	},

	actHeading: {
		fontSize: 35,
        margin: 70,
		marginBottom: 0,
		marginTop: 0
	},

	plus: {
		width: 32,
		height: 32,
	},

    propsContainer: {
        flexDirection: 'column'
    
    },

    propTitle: {
        fontSize: 24,
		width: 230,
        height: 30,
        marginBottom: 15
    },

    gName: {
        fontSize: 18,
        marginBottom:10
    },

    activityContainer: {
        width: 227,
        height: 59,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth: 1
    },

    activity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        marginBottom: 10
    },
    
    infoIcon: {
        width: 12,
		height: 12
    },

    activityInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },

    noActivity: {
        fontStyle: 'italic',
        marginBottom: 10
    }


})

export default styles;