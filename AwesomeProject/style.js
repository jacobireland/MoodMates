import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F4EFE6',
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
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: 'black',
		shadowColor: 'black',
		alignSelf: 'center',
		marginBottom: 20,
		shadowOpacity: 0.9,
		shadowRadius: 25,


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