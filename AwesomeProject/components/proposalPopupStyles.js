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
		height: 470,
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
		marginBottom: 20,
	},

	header: {
		marginTop: 15,
		marginLeft: 25,
		fontSize: 30,
	},

	closeContainer: {
		height: 25,
		width: 25,
		borderRadius: 25/2,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 87,
		marginTop: 8
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
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		marginLeft: 40,
	},

	dateContainer: {
		marginLeft: 15,
		justifyContent: 'center',
		alignItems: 'flex-start',
		height: 35,
		width: 112,
		borderRadius: 8,
		backgroundColor: '#eeeeef',
		paddingLeft: 10
	},

	notesContainer: {
		flexDirection: 'row',
		height: 100,
		alignItems: 'stretch',
		marginBottom: 32,
		width: '100%',
	},

	notestextView: {
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 4,
		height: 40,
		flex: 1,
		justifyContent: 'center',
		padding: 4,
		marginLeft: 41,
		height: '100%',
		justifyContent: 'flex-start'
	},

	sendProposal: {
		width: 130,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 4,
		backgroundColor: '#8BC7AF',
	},

	sendContainer: {
		height: 30,
		alignItems: 'center',
		justifyContent: 'center'
	},

	sendText: {
		fontSize: 18
	},



})

export default styles;