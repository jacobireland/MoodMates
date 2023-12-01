import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	
	mainContainer: {
		flex: 1,
		alignItems: 'center',
	},

	headingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 30
	},

	backArrow: {
		width: 25,
		height: 25,
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
		marginTop: 20
	},

	friendsStat: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 30
	},

	friendsText: {
		fontSize: 18,
	},

	groupsStat: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 170
	},

	fStatsText: {
		fontSize: 18,
		marginBottom: 5
	},

	trendsContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},

	trendsText: {
		fontSize: 18,
		marginTop: 30,
		marginBottom: 10
	},

	intervals: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	weekContainer: {
		flex: 1,
		marginLeft: 152,
		height: 89,
		justifyContent: 'center',
	},

	monthContainer: {
		flex: 1,
		marginLeft: 146.5,
		height: 89,
		justifyContent: 'center',
	},

	yearContainer: {
		flex: 1,
		marginLeft: 160,
		height: 89,
		justifyContent: 'center',
	},

	thisTexts: {
		fontSize: 15,
		marginLeft: 30
	},

	logsContainer: {
		width: 155,
		height: 28,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		
	},

	logsText: {
		fontSize: 16,
		fontWeight: '600'
	},



	//recentLogs.js styles

	headingLogsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 0
	},

	sectionListContainer: {
		height: 670
	},

	recentLogs: {
		fontSize: 30,
		marginLeft: 71,
	},

	dateTimeText: {
		fontStyle: 'italic',
		marginTop: 15
	},

	entryContainer: {
		flex: 1,
		backgroundColor: 'lightgray',
		marginBottom: 5,
		borderRadius: 5,
		padding: 4,
		marginTop: 5
	},

	entryText: {
		fontSize: 17
	},

	sectionTitle: {
		paddingTop: 30,
		paddingBottom: 20,
		fontSize: 18,
		fontWeight: '600',
		backgroundColor: 'darkgray',
		borderRadius: 5,
		width: '100%',
		height: 30,
		overflow: 'hidden',
		justifyContent: 'center'
	}

	



	
})

export default styles;