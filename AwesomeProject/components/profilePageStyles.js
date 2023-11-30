import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	
	mainContainer: {
		flex: 1,
		alignItems: 'center',
	},

	headingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 50
	},

	backArrow: {
		width: 27,
		height: 27,
	},

	name: {
		fontSize: 35,
		margin: 88,
		marginBottom: 0,
		marginTop: 0
	},

	settingsIcon: {
		width: 32,
		height: 32,
	},
	
	moodContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 40
	},

	moodText: {
		fontSize: 18,
		marginTop: 10
	},

	friendsButton: {
		backgroundColor: '#8BC7AF',
		width: 120,
		height: 35,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center'
	},

	statsContainer: {
		width: '100%',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		marginTop: 40
	},

	friendsStat: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 40
	},

	groupsStat: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 145
	},

	fStatsText: {
		fontSize: 20,
		marginBottom: 8
	},

	trendsContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},

	trendsText: {
		fontSize: 20,
		marginTop: 25,
		marginBottom: 25
	},

	intervals: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	thisTexts: {
		fontSize: 17,
	},





	
})

export default styles;