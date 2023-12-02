import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},

	proPopupContainer: {
		width: 355,
		height: 510,
		backgroundColor: 'white',
		borderRadius: 10,
	},

	popupContent: {
		flex: 1,
		padding: 0,
	},

	headerContainer: {
		height: 60,
		width: '100%',
		flexDirection: 'row',
		marginBottom: 35,
		justifyContent: 'center',
	},

	header: {
		marginTop: 25,
		fontSize: 30,
	},

	closeContainer: {
		height: 25,
		width: 25,
		borderRadius: 25/2,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 8,
		position: 'absolute',
		left: 322,
	},

	closeIcon: {
		tintColor: 'gray',
		width: 15,
		height: 15,
	},

	contentContainer: {
		padding: 25,
		paddingTop: 0
	},

	text: {
		fontSize: 18
	},

	firstRowContainer: {
		flexDirection: 'row',
		marginBottom: 25
	},

	timeDateContainer: {
		height: 80,
		alignItems: 'flex-start',
		width: 140,
	},

	timeDateBox: {
		flexDirection: 'row',
		marginBottom: 30
	},

	textTime: {
		fontSize: 18,
		marginRight: 18
	},

	textDate: {
		fontSize: 18,
		marginRight: 20
	},

	proposedByContainer: {
		width: 160,
		alignItems: 'center',
		marginLeft: 20
	},

	moodContainer: {
		marginTop: 5,
		marginBottom: 0
	},

	locationContainer: {
		flexDirection: 'row',
		marginBottom: 25
	},

	textLocation: {
		marginRight: 20,
		fontSize: 18
	},

	attendeesContainer: {
		marginBottom: 15,
	},

	attendeesBox: {
		flexDirection: 'row',
		marginTop: 5,
		paddingTop: 7,
		paddingLeft: 4,
		paddingBottom: 5
	},

	attendees: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 20,
		marginBottom: 20
	},

	switchContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 45,
		flexDirection: 'row',
	},

	switchBox: {
		width: 90,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},

	switchIcon: {
		transform: [{scale: 0.34}],
		margin: 0,
		padding: 0,
	},

	textNG: {
		marginRight: 10
	},

	textG: {
		marginLeft: 10,
		marginRight: 23

	}


	
})

export default styles;