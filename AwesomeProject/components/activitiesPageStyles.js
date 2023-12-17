import {StyleSheet} from 'react-native'

const Styles = () => {
	
	return StyleSheet.create({

		mainContainer: {
			flex: 1
		},

		headingContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			marginBottom: 30
		},

		actHeading: {
			fontSize: 35,
			marginRight: 170,
		},

		plus: {
			width: 32,
			height: 32,
			tintColor: '#E4ECF1'
		},

		propsContainer: {
			flexDirection: 'column',
			marginBottom: 25
		},

		propTitle: {
			fontSize: 24,
			width: 230,
			height: 30,
			marginBottom: 15,
			fontWeight: '500',
		},

		actTitle: {
			color: '#1F2532',
		},

		actDate: {
			color: '#1F2532'
		},

		actName: {
			color: '#1F2532'
		},

		gName: {
			fontSize: 18,
			marginBottom: 10,
			marginTop: 20,
		},

		gNameMovie: {
			fontSize: 18,
			marginBottom: 10,
		},

		activitiesContainer: {
			width: '100%',
			height: 59,
			marginBottom: 10,
			flexDirection: 'row',
			alignItems: 'center',
		},

		activityContainer: {
			width: 227,
			height: 59,
			borderRadius: 8,
			backgroundColor: '#FFFFFF',
		},

		activity: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			margin: 5,
			marginBottom: 10
		},
		
		infoIcon: {
			width: 12,
			height: 12,
			tintColor: '#1F2532'
		},

		activityInfo: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			margin: 5
		},

		noActivity: {
			fontStyle: 'italic',
			marginBottom: 10
		},

		switchContainer: {
			justifyContent: 'center',
			alignItems: 'center',
			height: 59,
			flexDirection: 'row',
			marginLeft: 30,
			width: 100,
		},

		switchBox: {
			width: 90,
			height: 50,
			justifyContent: 'center',
			alignItems: 'center'
		},

		switchIcon: {
			transform: [{scale: 0.25}],
			margin: 0,
			padding: 0,
		},

	})

}

export default Styles;