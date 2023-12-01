import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import NavBar from './components/navBar';
import MoodPage from './components/moodPage';
import FlaskTester from './components/flaskTester';
import ActivityRsvpPopupMain from './components/activityRsvpPopupMain';
import ProposalPopupMain from './components/proposalPopupMain';
import RecentLogs from './components/recentLogs';
import ProfilePage from './components/profilePage';
import MyGroups from './components/myGroups';

/** This is the backbone code for our app.
	The NavBar will be on every page.
	We can code each page as its own component (look at MoodPage for example), 
	and then use functions to call that component/page based on buttons pressed in the app.
	When a certain page needs to be shown, it will be placed in the
	appContent element (like how MoodPage is right now) and that will
	make it visible to users */


const App = () => {

	const [page, setPage] = React.useState('MoodPage')

	const screenChoose = (screen) => {
		setPage(screen)
	};

	const screenRender = () => {
		if (page == 'MoodPage') {
			return <MoodPage screenChoose={screenChoose}/>
		}

		else if (page == 'GroupsPage') {
			return <ActivityRsvpPopupMain/>
		}

		else if (page == 'ActivitiesPage') {
			return <ProposalPopupMain/>
		}

		else if (page == 'ProfilePage') {
			return <ProfilePage screenChoose={screenChoose}/>
		}

		else if (page == 'RecentLogs') {
			return <RecentLogs/>
		}

		else {
			return <MoodPage screenChoose={screenChoose}/>
		}
	}

	return (
	
		<View style={styles.container}>
			<View style={styles.appContent}>

				{/* replace this with your page export
				i.e.: <your_page_export_name/> to be able to see your
				code in the Expo Go app */}
				{screenRender()}

			</View>
		
			{/* Component for our nav bar,
			defined in /components/navBar.js */}
			<NavBar screenChoose={screenChoose}/>
		
		</View>
		
)}

export default App;