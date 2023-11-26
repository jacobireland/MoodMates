import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6E6E6E',
	},

	appContent: {
		marginTop: 81,
		marginLeft: 30,
		marginRight: 30,
		flex: 1,
	},

	greeting: {
		width: 'auto',
	},

	greetingProfile: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		width: '100%',
	},

	greetingText: {
		fontSize: 32,
		paddingRight: 109,
	},

	profileIcon: {
		width: 41,
		height: 41,
	},

	greetingName: {
		fontSize: 32,
	},

	feelingToday: {
		width: 'auto',
		marginTop: 20,
	},

	feelingQuestion: {
		fontSize: 18,
		marginBottom: 30,
	},

	moodIcon: {
		width: '100%',
		height: 120,
		justifyContent: 'center',
		alignItems: 'center',
	},

	anxietyLevel: {
		width: 100,
		height: 100,
		margin: 'auto',
		
	},

	energyLevel: {
		width: 81,
		height: 81,
		borderRadius: 81/2,
		backgroundColor: '#97E384',
		position: 'absolute',
		margin: 'auto',
		shadowColor: '#97E384',
		shadowOpacity: 1,
		shadowRadius: 10,
		shadowOffset: {width: 0, height: 0},
	},

	sliderText: {
		fontSize: 22,
		marginTop: 15
	},

	diaryEntry: {
		backgroundColor: '#ffffff',
		height: 160,
		marginTop: 30,
		borderRadius: 6,
		alignItems: 'flex-end',
	},




	navBar: {
		margin: 'auto',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		width: '100%',
		height: 65,
		flexDirection: 'row',
	},

	navButtonContainer: {
		backgroundColor: '#123456',
		width: 138,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#C0EDDA',
	},

	buttonText: {
		fontSize: 20,
	},

	separator: {
		height: 65,
		width: 1,
		backgroundColor: '#8BC7AF',
	}



})

export default styles;