import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Mood from './components/mood';
import NavBar from './components/navBar';
import Greeting from './components/greeting';
import DiaryEntry from './components/diaryEntry';
import MoodPage from './components/moodPage';
import ProposalPopup from './components/proposalPopup';
import ProposalPopupMain from './components/proposalPopupMain';
import ActivityRsvpPopupMain from './components/activityRsvpPopupMain';


/** This is the backbone code for our app.
	The NavBar will be on every page.
	We can code each page as its own component (look at MoodPage for example), 
	and then use functions to call that component/page based on buttons pressed in the app.
	When a certain page needs to be shown, it will be placed in the
	appContent element (like how MoodPage is right now) and that will
	make it visible to users */


const App = () => {

	return (
	
		<View style={styles.container}>
			<View style={styles.appContent}>

				{/* replace this with your page export
				i.e.: <your_page_export_name/> to be able to see your
				code in the Expo Go app */}
				<ActivityRsvpPopupMain/>

			</View>
		
		{/* Component for our nav bar,
		defined in /components/navBar.js */}
		<NavBar/>
		
	</View>
		
)}

export default App;