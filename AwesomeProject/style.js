import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
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
	},

	greetingWordContainer: {
		flex: 1,
	},

	greetingWord: {
		fontSize: 32,
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
		marginBottom: 8,
		marginTop: 20,
	},

	moodIconContainer: {
		width: '100%',
		height: 120,
		justifyContent: 'center',
		alignItems: 'center',
	},

	moodIcon: {
		width: 110,
		height: 110,
		borderRadius: 55,
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

	diaryBox: {
		width: '100%',
		height: 160,
		borderRadius: 4,
		backgroundColor: 'white',
		alignItems: 'flex-start',
		marginTop: 32
	},

	diaryOpen: {
		width: '100%',
		height: 160,
		borderRadius: 4,
	},

	diaryText: {
		marginTop: 5,
		marginLeft: 5,
		marginBottom: 5,
		marginRight: 5
	},

	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},

	modalContent: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 8,
		width: 340,
		marginBottom: 100
	},
	
	textInput: {
		height: 160,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 5,
	},
	
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
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
	},


})

export default styles;