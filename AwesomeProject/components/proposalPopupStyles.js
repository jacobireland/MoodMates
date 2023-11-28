import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},

	proPopupContainer: {
		width: '100%',
		height: 500,
		backgroundColor: 'white',
		borderRadius: 5,
	},

	popupContent: {
		flex: 1,
		padding: 25,
		paddingTop: 15
	},

	header: {
		fontSize: 30,
		marginBottom: 35
	},

	text: {
		fontSize: 18
	},

	containers: {
		flexDirection: 'row',
		height: 50,
		alignItems: 'center',
		marginBottom: 13,
		width: '100%',
	},

	textView: {
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 4,
		height: 40,
		flex: 1,
		justifyContent: 'center',
		padding: 4,
		marginLeft: 30
	},

	loctextView: {
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 4,
		height: 40,
		flex: 1,
		justifyContent: 'center',
		padding: 4,
		marginLeft: 21
	},

	timetextView: {
		height: 40,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginLeft: 39
	},

	notesContainer: {
		flexDirection: 'row',
		height: 100,
		alignItems: 'stretch',
		marginBottom: 50,
		width: '100%',
	},

	notestextView: {
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 4,
		height: 40,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginLeft: 41,
		padding: 4,
		height: '100%'
	},



})

export default styles;